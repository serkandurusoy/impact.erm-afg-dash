import objectHash from 'object-hash';
import localForage from 'localforage';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { debounce } from 'throttle-debounce';
import exportCSV from '../utils/export-csv';

class DataLoader extends Component {
  static propTypes = {
    apiPath: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
    districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
    children: PropTypes.func.isRequired,
  };

  static defaultProps = {
    provinceFilter: null,
    districtFilter: null,
  };

  state = {
    data: null,
    loading: true,
    error: false,
    fullScreen: false,
  };

  componentDidMount() {
    this.componentIsInMountedState = true;
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const prevProvinces = prevProps.provinceFilter || [];
    const nextProvinces = this.props.provinceFilter || [];

    const provincesUpdated = prevProvinces.join('') !== nextProvinces.join('');

    const prevDistricts = prevProps.districtFilter || [];
    const nextDistricts = this.props.districtFilter || [];

    const districtsUpdated = prevDistricts.join('') !== nextDistricts.join('');

    if (provincesUpdated || districtsUpdated) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    this.componentIsInMountedState = false;
  }

  setStateIfMounted = (state, callback) => {
    if (this.componentIsInMountedState) {
      this.setState(state, callback);
    }
  };

  fetchData = async () => {
    const { apiPath, provinceFilter, districtFilter } = this.props;

    let lastUpdate;
    let version;
    let noCache;

    try {
      lastUpdate = await localForage.getItem('lastUpdate');
      version = await localForage.getItem('version');
      noCache = await localForage.getItem('noCache');
    } catch (localForageError) {
      // eslint-disable-next-line no-console
      console.log({ localForageError });
    }

    const query = {};

    query.dateBegin = new Date(0);
    query.dateEnd = lastUpdate ? new Date(lastUpdate) : new Date();

    if (provinceFilter && provinceFilter.length > 0) {
      query.provinces = provinceFilter;
    }

    if (districtFilter && districtFilter.length > 0) {
      query.districts = districtFilter;
    }

    const options = {};

    if (Object.keys(query).length > 0) {
      options.params = query;
    }

    const hash = objectHash(
      { apiPath, options, version },
      { unorderedArrays: true },
    );

    const cachedResult = await localForage
      .getItem(hash)
      // eslint-disable-next-line no-console
      .catch(localForageError => console.log({ localForageError }));

    if (!noCache && cachedResult) {
      this.setStateIfMounted({
        loading: false,
        error: false,
        data: cachedResult,
      });
    } else {
      this.fetchFromAPI(apiPath, options, hash, noCache);
    }
  };

  fetchFromAPI = debounce(1000, async (apiPath, options, hash, noCache) => {
    this.setStateIfMounted(
      { loading: true, error: false, data: null },
      async () => {
        try {
          const { data } = await axios.get(apiPath, options);
          this.setStateIfMounted(
            { loading: false, error: false, data },
            async () => {
              if (!noCache) {
                await localForage.setItem(hash, data).catch(localForageError =>
                  // eslint-disable-next-line no-console
                  console.log({ localForageError }),
                );
              }
            },
          );
        } catch (apiError) {
          // eslint-disable-next-line no-console
          console.log({ apiError });
          this.setStateIfMounted({ loading: false, error: true });
        }
      },
    );
  });

  toggleFullScreen = e => {
    if (e && e.preventDefault) e.preventDefault();
    this.setState({ fullScreen: !this.state.fullScreen });
  };

  componentIsInMountedState = false;

  renderChart() {
    const { subTitle, children } = this.props;
    const { data, fullScreen } = this.state;

    return (
      <div className="graph__graph">
        {!fullScreen && (
          <div className="graph__buttons">
            <a
              title={`Download chart data as "${subTitle}.csv"`}
              className="graph__full"
              href="#"
              onClick={e => {
                e.preventDefault();
                exportCSV(data, subTitle);
              }}
            >
              <span className="icon icon--download" />
            </a>
            <a
              title="View large version"
              className="graph__full"
              href="#"
              onClick={this.toggleFullScreen}
            >
              <span className="icon icon--arrow-top-right" />
            </a>
          </div>
        )}
        {!fullScreen && <div className="graph__subtitle">{subTitle}</div>}
        <div className="graph__placeholder">{children(data, fullScreen)}</div>
      </div>
    );
  }

  render() {
    const { subTitle } = this.props;
    const { loading, error, data, fullScreen } = this.state;

    return loading || error ? (
      <div className="loader loader__component">
        <div>
          <div className="loader__header">
            <div className="graph__subtitle">{subTitle}</div>
          </div>
          {error ? (
            <div className="loader__message">
              Error loading chart data,{' '}
              <a href="#" onClick={this.fetchFromAPI}>
                click here
              </a>{' '}
              to retry.
            </div>
          ) : (
            <div className="loader__message">Loading chart data</div>
          )}
        </div>
      </div>
    ) : data ? (
      <React.Fragment>
        {this.renderChart()}
        {fullScreen && (
          <div className="popup active">
            <div className="popup__inner">
              <div className="popup__header">
                <div className="popup__title">{subTitle}</div>
                <a
                  className="popup__close"
                  href="#"
                  onClick={this.toggleFullScreen}
                >
                  <span className="icon icon--close" />
                </a>
              </div>
              <div className="popup__content">{this.renderChart()}</div>
            </div>
          </div>
        )}
      </React.Fragment>
    ) : null;
  }
}

export default DataLoader;
