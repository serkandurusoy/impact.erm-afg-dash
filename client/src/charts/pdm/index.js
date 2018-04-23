import React from 'react';
import PropTypes from 'prop-types';
import ChartLoader from '../_lib/chart-loader';

const General = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_general'),
});

const Full = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_full'),
});

const Prices = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_prices'),
});

const PdmCharts = ({ sectionFilter, provinceFilter, districtFilter }) => (
  <div>
    {(sectionFilter === null ||
      sectionFilter.includes('General Information')) && (
      <General
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Full Market Survey')) && (
      <Full provinceFilter={provinceFilter} districtFilter={districtFilter} />
    )}
    {(sectionFilter === null || sectionFilter.includes('Prices Survey')) && (
      <Prices provinceFilter={provinceFilter} districtFilter={districtFilter} />
    )}
  </div>
);

PdmCharts.propTypes = {
  sectionFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
  provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
  districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
};

PdmCharts.defaultProps = {
  sectionFilter: null,
  provinceFilter: null,
  districtFilter: null,
};

export default PdmCharts;
