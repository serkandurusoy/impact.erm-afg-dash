import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import chunkedArray from '../utils/chunkedArray';
import PROVINCE_INFO from '../constants/province-info';

const provinceColumns = chunkedArray(
  Math.ceil(PROVINCE_INFO.length / 2),
  PROVINCE_INFO,
);

const ProvinceFilterList = ({ selectedProvinces, toggleSelectedProvince }) => (
  <div className="subpage-map__left">
    <h3>Select intrested province(s)</h3>
    <div className="subpage-map__lists">
      {provinceColumns.map(column => (
        <div key={column[0].name} className="subpage-map__list">
          {column.map(({ id, name, label, districts }) => (
            <div
              key={name}
              className={classNames('subpage-map__list-item', {
                active: selectedProvinces.includes(id),
              })}
            >
              <a
                onClick={() => toggleSelectedProvince(id)}
                className="subpage-map__list-link"
              >
                {label}
                <span>({districts.length} districts)</span>
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

ProvinceFilterList.propTypes = {
  selectedProvinces: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleSelectedProvince: PropTypes.func.isRequired,
};

export default ProvinceFilterList;
