import React from 'react';
import PropTypes from 'prop-types';
import ProvinceFilterList from './_province-filter-list';
import ProvinceFilterMap from './_province-filter-map';

const ProvinceFilter = ({ selectedProvinces, toggleSelectedProvince }) => (
  <div className="subpage-map">
    <ProvinceFilterList
      selectedProvinces={selectedProvinces}
      toggleSelectedProvince={toggleSelectedProvince}
    />
    <ProvinceFilterMap
      selectedProvinces={selectedProvinces}
      toggleSelectedProvince={toggleSelectedProvince}
    />
  </div>
);

ProvinceFilter.propTypes = {
  selectedProvinces: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleSelectedProvince: PropTypes.func.isRequired,
};

export default ProvinceFilter;
