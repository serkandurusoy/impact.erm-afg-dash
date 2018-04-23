import React from 'react';
import PropTypes from 'prop-types';
import ChartLoader from '../_lib/chart-loader';

const Household = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_household'),
});

const Additional = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_additional'),
});

const General = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_general'),
});

const Financial = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_financial'),
});

const Food = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_food'),
});

const Wash = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_wash'),
});

const Shelter = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_shelter'),
});

const Beneficiaries = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './_beneficiaries'),
});

const HeatCharts = ({ sectionFilter, provinceFilter, districtFilter }) => (
  <div>
    {(sectionFilter === null || sectionFilter.includes('Household')) && (
      <Household
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Additional Vulnerability Assessment')) && (
      <Additional
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('General Assessment')) && (
      <General
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Financial & Asset Assessment')) && (
      <Financial
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Food & Nutrition Assessment')) && (
      <Food provinceFilter={provinceFilter} districtFilter={districtFilter} />
    )}
    {(sectionFilter === null || sectionFilter.includes('Wash Assessment')) && (
      <Wash provinceFilter={provinceFilter} districtFilter={districtFilter} />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Shelter & NFI Assessment')) && (
      <Shelter
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Beneficiaries’ Priorities')) && (
      <Beneficiaries
        provinceFilter={provinceFilter}
        districtFilter={districtFilter}
      />
    )}
  </div>
);

HeatCharts.propTypes = {
  sectionFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
  provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
  districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
};

HeatCharts.defaultProps = {
  sectionFilter: null,
  provinceFilter: null,
  districtFilter: null,
};

export default HeatCharts;
