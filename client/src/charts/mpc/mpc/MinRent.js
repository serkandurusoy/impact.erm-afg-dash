import React from 'react';
import PropTypes from 'prop-types';

const Chart = (
  { title, provinceFilter, districtFilter }, // eslint-disable-line no-unused-vars
) => (
  <div>
    <div className="graph">
      <h4 className="graph__title">
        {title}
        <a className="graph__full" href="#">
          <span className="icon icon--arrow-top-right" />
        </a>
      </h4>
      <div className="graph__graph">
        <div className="graph__placeholder">CHART</div>
      </div>
    </div>
  </div>
);

Chart.propTypes = {
  title: PropTypes.string.isRequired,
  provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
  districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Chart.defaultProps = {
  provinceFilter: null,
  districtFilter: null,
};

export default Chart;
