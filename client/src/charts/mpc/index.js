import React from 'react';
import PropTypes from 'prop-types';
import ChartLoader from '../_lib/chart-loader';

const AverageSellingPrices = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './mpc/AverageSellingPrices'),
});

const MarketAppearance = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './mpc/MarketAppearance'),
});

const MarketSize = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './mpc/MarketSize'),
});

const MarketSizeByProvince = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './mpc/MarketSizeByProvince'),
});

const MaxRent = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './mpc/MaxRent'),
});

const MinRent = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './mpc/MinRent'),
});

const Charts = (
  { sectionFilter, provinceFilter, districtFilter }, // eslint-disable-line no-unused-vars
) => (
  <div>
    {(sectionFilter === null ||
      sectionFilter.includes('Average Current Selling Prices')) && (
      <AverageSellingPrices
        apiPath="/api/query/mpc/mpc/averageSellingPrices"
        title="Average Current Selling Prices"
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}

    {(sectionFilter === null ||
      sectionFilter.includes('Market Appearance (Functionality)')) && (
      <MarketAppearance
        apiPath="/api/query/mpc/mpc/marketAppearance"
        title="Market Appearance (Functionality)"
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}

    {(sectionFilter === null || sectionFilter.includes('Market Size')) && (
      <MarketSize
        apiPath="/api/query/mpc/mpc/marketSize"
        title="Market Size"
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}

    {(sectionFilter === null ||
      sectionFilter.includes('Market Size by Province')) && (
      <MarketSizeByProvince
        apiPath="/api/query/mpc/mpc/marketSizeByProvince"
        title="Market Size by Province"
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}

    {(sectionFilter === null ||
      sectionFilter.includes('Reported Maximum Rent Amount')) && (
      <MaxRent
        apiPath="/api/query/mpc/mpc/maxRent"
        title="Reported Maximum Rent Amount"
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}

    {(sectionFilter === null ||
      sectionFilter.includes('Reported Minimum Rent Amount')) && (
      <MinRent
        apiPath="/api/query/mpc/mpc/minRent"
        title="Reported Minimum Rent Amount"
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
  </div>
);

Charts.propTypes = {
  sectionFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
  provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
  districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Charts.defaultProps = {
  sectionFilter: null,
  provinceFilter: null,
  districtFilter: null,
};

export default Charts;
