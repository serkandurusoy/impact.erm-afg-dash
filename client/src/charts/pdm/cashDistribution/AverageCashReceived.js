import React from 'react';
import PropTypes from 'prop-types';

const Chart = ({ data }) => (
  <div
    style={{
      backgroundColor: '#696969',
      color: '#ffffff',
      textAlign: 'left',
      lineHeight: 1.5,
      width: '100%',
      height: '100%',
      overflow: 'auto',
      fontSize: 10,
    }}
  >
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
