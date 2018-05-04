/* eslint-disable */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Header, ProvinceFilter } from '../components/index';
import chunkedArray from '../utils/chunkedArray';
import SECTIONS from '../constants/sections';

// begin:remove
import objectHash from 'object-hash';
import localForage from 'localforage';
import PropTypes from 'prop-types';
import axios from 'axios';
import { debounce } from 'throttle-debounce';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';

class DataLoader extends Component {
  static propTypes = {
    apiPath: PropTypes.string.isRequired,
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

  componentIsInMountedState = false;

  render() {
    const { subTitle, children } = this.props;
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
      <div className="graph__graph">
        <div className="graph__buttons">
          <a className="graph__full" href="#">
            <span className="icon icon--download" />
          </a>
          <a className="graph__full" href="#">
            <span className="icon icon--arrow-top-right" />
          </a>
        </div>
        {/* TODO: SERKAN make sure we have subtitles for all of them*/}
        {subTitle !== '' && <div className="graph__subtitle">{subTitle}</div>}
        <div className="graph__placeholder">
          {children(data)}
        </div>
      </div>
    ) : null;
  }
}

const ComponentIsLoading = ({ error, pastDelay, timedOut }) => (
  <div className="loader loader__component">
    {error || timedOut ? (
      <div>Error loading chart</div>
    ) : pastDelay ? (
      <div>Loading chart</div>
    ) : null}
  </div>
);

ComponentIsLoading.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  pastDelay: PropTypes.bool,
  timedOut: PropTypes.bool,
};

ComponentIsLoading.defaultProps = {
  error: false,
  pastDelay: false,
  timedOut: false,
};

const ComponentLoader = opts =>
  LoadableVisibility({
    loading: ComponentIsLoading,
    delay: 200,
    timeout: 10 * 1000,
    render(loaded, props) {
      const ChartComponent = loaded.default;
      return (
        <DataLoader {...props}>{data => <ChartComponent data={data} />}</DataLoader>
      );
    },
    ...opts,
  });

const TwoCol1L = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ '../charts/heat/demographics/AverageNumberOfBreadWinner'),
});

const TwoCol1 = () => <TwoCol1L
  apiPath="/api/query/heat/demographics/averageNumberOfBreadWinner"
  subTitle="Average Number of Breadwinner per HH"
/>

const TwoCol2L = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ '../charts/heat/demographics/FrequencyWithNationalId'),
});

const TwoCol2 = () =><TwoCol2L
  apiPath="/api/query/heat/demographics/frequencyWithNationalId"
  subTitle="Frequency of HHs with National ID"
/>

const TwoCol3L = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ '../charts/heat/generalAssessment/DisplacementCategory'),
});

const TwoCol3 = () =><TwoCol3L
  apiPath="/api/query/heat/generalAssessment/displacementCategory"
  subTitle="Displacement Category"
/>

const OneCol1L = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ '../charts/heat/general/NumberOfHHPerProvince'),
});

const OneCol1 = () => <OneCol1L
  apiPath="/api/query/heat/general/numberOfHHPerProvince"
  subTitle="Number of Households Assessed Per Province"
/>

const OneCol2L = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ '../charts/heat/generalAssessment/ProvinceOfOrigin'),
});

const OneCol2 = () => <OneCol2L
  apiPath="/api/query/heat/generalAssessment/provinceOfOrigin"
  subTitle="Reported Province of Origin"
/>

const OneCol3L = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ '../charts/pdm/impact/LevelOfDebtComparedPerProvince'),
});

const OneCol3 = () => <OneCol3L
  apiPath="/api/query/pdm/impact/levelOfDebtComparedPerProvince"
  subTitle="Reported Level of Debt Compared to One Month Ago per Province"
/>


const LoadCompOneCol = () => <div className="loader loader__component">
  <div>
    <div className="loader__header">
      <div className="graph__subtitle">Household Demographics</div>
    </div>
    <div className="loader__message">Loading chart data</div>
  </div>
</div>;

const LoadCompTwoCol = () =>  <div className="loader loader__component">
  <div>
    <div className="loader__header">
      <div className="graph__subtitle">Household Demographics</div>
    </div>
    <div className="loader__message">Loading chart data</div>
  </div>
</div>;
// end:remove

const SECTION = SECTIONS.find(({ title }) => title === 'HEAT');

class HeatAsGrid extends Component {
  state = {
    selectedProvinces: [],
  };

  toggleSelectedProvince = i => {
    const { selectedProvinces } = this.state;
    if (selectedProvinces.includes(i)) {
      this.setState({
        selectedProvinces: selectedProvinces.filter(p => p !== i),
      });
    } else {
      this.setState({
        selectedProvinces: [...selectedProvinces, i].sort(),
      });
    }
  };

  render() {
    const { selectedProvinces } = this.state;

    return (
      <div>
        <Helmet title="GRID PROTOTYPE" />
        <Header
          className="header--subpage__heat"
          title="HEAT"
          subTitle={SECTION.subTitle}
          iconClass="icon--tools"
        >
          <div className="header__lists">
            {chunkedArray(3, SECTION.subTitles).map((column, index) => (
              <div key={index} className="header__list">
                {column.map(({ subTitle, index: subTitleIndex }) => (
                  <div key={subTitleIndex} className="header__list-item">
                    {subTitle}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Header>
        <main className="main-content">
          <div className="container-fluid">
            <section className="subpage">
              <h2 className="subpage__title">Overview</h2>
              <div className="subpage__content">
                {SECTION.info.map((text, index) => (
                  <div key={index} className="subpage__content-item">
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="bg--gray-1">
            <ProvinceFilter
              selectedProvinces={selectedProvinces}
              toggleSelectedProvince={this.toggleSelectedProvince}
            />

            <section className="content__single">
              <div>
                <div className="graph--horizontal" id="anchor-1">
                  <div className="graph__col--30">
                    <h4 className="graph__title">General Assessment</h4>
                    <div className="graph__description">
                      Quisque velit nisi, pretium ut lacinia in, elementum id
                      enim. Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Vivamus magna justo, lacinia eget
                      consectetur sed, convallis at tellus. Vivamus suscipit
                      tortor eget felis porttitor volutpat. Vestibulum ac diam
                      sit amet quam vehicula elementum sed sit amet dui.
                    </div>
                  </div>

                  <div className="graph__col--70">
                    <div className="graph__grid-2">
                      <TwoCol1 />
                      <TwoCol2 />
                      <TwoCol3 />
                      <LoadCompTwoCol />
                      <LoadCompTwoCol />
                      <LoadCompTwoCol />
                    </div>
                    <OneCol1 />
                    <OneCol2 />
                    <LoadCompOneCol />
                    <div className="graph__grid-2">
                      <TwoCol3 />
                      <LoadCompTwoCol />
                    </div>
                    <OneCol3 />
                  </div>
                </div>
                <div className="loader loader__component">
                  <div>
                    <div className="loader__header">
                      <h4 className="graph__title">Household Demographics</h4>
                      <div className="graph__subtitle">Age Disaggregation</div>
                    </div>
                    <div className="loader__message">Loading chart data</div>
                  </div>
                </div>
              </div>
              <div class="go2top">
                <a href="#" class="go2top__link active">
                  <span class="icon icon--arrow-top"></span>
                </a>
              </div>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default HeatAsGrid;
