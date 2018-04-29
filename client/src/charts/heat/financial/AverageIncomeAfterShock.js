import React from 'react';
import PropTypes from 'prop-types';
// import BulletGraph from 'react-bullet-graph-react16';

const Chart = ({ data }) => (
  <div
    style={{
      width: '100%',
      maxWidth: 980,
      margin: '0 auto',
    }}
  >
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
