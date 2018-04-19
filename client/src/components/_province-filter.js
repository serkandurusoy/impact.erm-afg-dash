import React, { Component } from 'react';
import classNames from 'classnames';
import chunkedArray from '../utils/chunkedArray';
import PROVINCE_INFO from '../constants/province-info';
import DELETEME_MAP from './DELETEME_MAP.png';

const provinceColumns = chunkedArray(
  Math.ceil(PROVINCE_INFO.length / 2),
  PROVINCE_INFO,
);

// eslint-disable-next-line
class ProvinceFilter extends Component {
  render() {
    return (
      <div className="subpage-map">
        <div className="subpage-map__left">
          <h3>Select intrested province(s)</h3>
          <div className="subpage-map__lists">
            {provinceColumns.map(column => (
              <div key={column[0].name} className="subpage-map__list">
                {column.map(({ name, label, districts }) => (
                  <div
                    key={name}
                    className={classNames('subpage-map__list-item', {
                      active: Math.random() > 0.7,
                    })}
                  >
                    <a href="#" className="subpage-map__list-link">
                      {label}
                      <span>({districts.length} districts)</span>
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="subpage-map__right">
          <a href="#">
            <img src={DELETEME_MAP} />
          </a>
        </div>
      </div>
    );
  }
}

export default ProvinceFilter;
