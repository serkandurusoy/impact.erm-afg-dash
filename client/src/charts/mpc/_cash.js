import React from 'react';
import PropTypes from 'prop-types';

const Cash = ({ provinceFilter, districtFilter }) => (
  <div>
    <div>PROVINCES: {provinceFilter && provinceFilter.join('')}</div>
    <div>DISTRICTS: {districtFilter && districtFilter.join('')}</div>
    <div className="graph">
      <h4 className="graph__title">
        Cash Distribution Process<a className="graph__full" href="#">
          <span className="icon icon--arrow-top-right" />
        </a>
      </h4>
      <div className="graph__subtitle">Lorem ipsum 1</div>
      <div className="graph__graph">
        <div className="graph__placeholder">CHART</div>
      </div>
    </div>
  </div>
);

Cash.propTypes = {
  provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
  districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Cash.defaultProps = {
  provinceFilter: null,
  districtFilter: null,
};

export default Cash;
