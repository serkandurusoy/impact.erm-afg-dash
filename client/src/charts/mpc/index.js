import React from 'react';
import PropTypes from 'prop-types';
import ChartLoader from '../_lib/chart-loader';

const General = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_general'),
});

const Household = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_household'),
});

const Cash = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_cash'),
});

const UseOfCash = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_use-of-cash'),
});

const Coping = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_coping'),
});

const MultiSector = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_multi-sector'),
});

const MpcCharts = ({ sectionFilter, provinceFilter, districtFilter }) => (
  <div>
    {(sectionFilter === null ||
      sectionFilter.includes('General Information')) && (
      <General
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Household Profile')) && (
      <Household
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Cash Distribution Process')) && (
      <Cash provinceFilter={provinceFilter} districtFilter={districtFilter} />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Use of Cash Assistance')) && (
      <UseOfCash
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Coping Strategies')) && (
      <Coping provinceFilter={provinceFilter} districtFilter={districtFilter} />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Multi-Sector Outcome')) && (
      <MultiSector
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
  </div>
);

MpcCharts.propTypes = {
  sectionFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
  provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
  districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
};

MpcCharts.defaultProps = {
  sectionFilter: null,
  provinceFilter: null,
  districtFilter: null,
};

export default MpcCharts;
