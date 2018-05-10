import React from 'react';
import PropTypes from 'prop-types';
import ComponentLoader from '../component-loader';

const AverageSellingPrices = ComponentLoader({
  subTitle: 'Average Current Selling Prices (AFN/kg or lt)',
  loader: () =>
    import(/* webpackPrefetch: true */ './mpc/AverageSellingPrices'),
});

const MarketAppearance = ComponentLoader({
  subTitle: 'Market Appearance (Functionality)',
  loader: () => import(/* webpackPrefetch: true */ './mpc/MarketAppearance'),
});

const MarketSize = ComponentLoader({
  subTitle: 'Market Size',
  loader: () => import(/* webpackPrefetch: true */ './mpc/MarketSize'),
});

const MarketSizeByProvince = ComponentLoader({
  subTitle: 'Market Size by Province',
  loader: () =>
    import(/* webpackPrefetch: true */ './mpc/MarketSizeByProvince'),
});

const MaxRent = ComponentLoader({
  subTitle: 'Reported Maximum Rent Amount (AFN)',
  loader: () => import(/* webpackPrefetch: true */ './mpc/MaxRent'),
});

const MinRent = ComponentLoader({
  subTitle: 'Reported Minimum Rent Amount (AFN)',
  loader: () => import(/* webpackPrefetch: true */ './mpc/MinRent'),
});

const Charts = (
  { sectionFilter, provinceFilter, districtFilter, toTop }, // eslint-disable-line no-unused-vars
) => (
  <div>
    {(sectionFilter === null ||
      sectionFilter.includes('Average Current Selling Prices')) && (
      <div className="graph" id="average-current-selling-prices">
        <h4 className="graph__title">Average Current Selling Prices</h4>
        <div className="graph__description" />
        <div className="go2top">
          <a onClick={toTop} href="#top" className="go2top__link active">
            <span className="icon icon--arrow-top" />
          </a>
        </div>
        <AverageSellingPrices
          apiPath="/api/query/mpc/mpc/averageSellingPrices"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}

    {(sectionFilter === null ||
      sectionFilter.includes('Market Appearance (Functionality)')) && (
      <div className="graph" id="market-appearance-functionality">
        <h4 className="graph__title">Market Appearance (Functionality)</h4>
        <div className="graph__description" />
        <div className="go2top">
          <a onClick={toTop} href="#top" className="go2top__link active">
            <span className="icon icon--arrow-top" />
          </a>
        </div>
        <MarketAppearance
          apiPath="/api/query/mpc/mpc/marketAppearance"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}

    {(sectionFilter === null || sectionFilter.includes('Market Size')) && (
      <div className="graph" id="market-size">
        <h4 className="graph__title">Market Size</h4>
        <div className="graph__description" />
        <div className="go2top">
          <a onClick={toTop} href="#top" className="go2top__link active">
            <span className="icon icon--arrow-top" />
          </a>
        </div>
        <MarketSize
          apiPath="/api/query/mpc/mpc/marketSize"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}

    {(sectionFilter === null ||
      sectionFilter.includes('Market Size by Province')) && (
      <div className="graph" id="market-size-by-province">
        <h4 className="graph__title">Market Size by Province</h4>
        <div className="graph__description" />
        <div className="go2top">
          <a onClick={toTop} href="#top" className="go2top__link active">
            <span className="icon icon--arrow-top" />
          </a>
        </div>
        <MarketSizeByProvince
          apiPath="/api/query/mpc/mpc/marketSizeByProvince"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}

    {(sectionFilter === null ||
      sectionFilter.includes('Reported Maximum Rent Amount')) && (
      <div className="graph" id="reported-maximum-rent-amount">
        <h4 className="graph__title">Reported Maximum Rent Amount</h4>
        <div className="graph__description" />
        <div className="go2top">
          <a onClick={toTop} href="#top" className="go2top__link active">
            <span className="icon icon--arrow-top" />
          </a>
        </div>
        <MaxRent
          apiPath="/api/query/mpc/mpc/maxRent"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}

    {(sectionFilter === null ||
      sectionFilter.includes('Reported Minimum Rent Amount')) && (
      <div className="graph" id="reported-minimum-rent-amount">
        <h4 className="graph__title">Reported Minimum Rent Amount</h4>
        <div className="graph__description" />
        <div className="go2top">
          <a onClick={toTop} href="#top" className="go2top__link active">
            <span className="icon icon--arrow-top" />
          </a>
        </div>
        <MinRent
          apiPath="/api/query/mpc/mpc/minRent"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}
  </div>
);

Charts.propTypes = {
  sectionFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
  provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
  districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
  toTop: PropTypes.func.isRequired,
};

Charts.defaultProps = {
  sectionFilter: null,
  provinceFilter: null,
  districtFilter: null,
};

export default Charts;
