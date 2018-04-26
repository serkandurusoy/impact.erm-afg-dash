import objectHash from 'object-hash';
import localForage from 'localforage';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class DataLoader extends Component {
  static propTypes = {
    apiPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
    districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
    children: PropTypes.func.isRequired,
  };

  static defaultProps = {
    subTitle: '',
    provinceFilter: null,
    districtFilter: null,
  };

  state = {
    data: null,
    loading: true,
    error: false,
  };

  async componentDidMount() {
    this.componentIsInMountedState = true;

    const { apiPath, provinceFilter, districtFilter } = this.props;

    let lastUpdate;
    let version;
    let noCache;

    try {
      lastUpdate = await localForage.getItem('lastUpdate');
      version = await localForage.getItem('version');
      noCache = await localForage.getItem('noCache');
    } catch (localForageError) {
      console.log({ localForageError });
    }

    const query = {};

    if (lastUpdate) {
      query.dateBegin = new Date(0);
      query.dateEnd = new Date(lastUpdate);
    }

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

    try {
      const hash = objectHash(
        { apiPath, options, version },
        { unorderedArrays: true },
      );

      const cachedResult = await localForage
        .getItem(hash)
        .catch(localForageError => console.log({ localForageError }));

      if (!noCache && cachedResult && this.componentIsInMountedState) {
        this.setState({ loading: false, error: false, data: cachedResult });
      } else {
        const { data } = await axios.get(apiPath, options);
        if (this.componentIsInMountedState) {
          this.setState({ loading: false, error: false, data }, async () => {
            if (!noCache) {
              await localForage
                .setItem(hash, data)
                .catch(localForageError => console.log({ localForageError }));
            }
          });
        }
      }
    } catch (apiError) {
      console.log({ apiError });
      if (this.componentIsInMountedState) {
        this.setState({ loading: false, error: true });
      }
    }
  }

  componentWillUnmount() {
    this.componentIsInMountedState = false;
  }

  componentIsInMountedState = false;

  render() {
    const { title, subTitle, children } = this.props;
    const { loading, error, data } = this.state;

    return loading || error ? (
      <div className="loader loader__component">
        {error ? (
          <div>Error loading chart data</div>
        ) : (
          <div>Loading chart data</div>
        )}
      </div>
    ) : data ? (
      <div>
        <div className="graph">
          <h4 className="graph__title">{title}</h4>
          {subTitle !== '' && <div className="graph__subtitle">{subTitle}</div>}
          <div className="graph__graph">
            <div className="graph__placeholder">{children(data)}</div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default DataLoader;
