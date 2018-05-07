import React from 'react';
import PropTypes from 'prop-types';
import { SpotMatrix } from '../../../components';
import AmountSpentChartSelector from './AmountSpentChartSelector';

const Chart = ({ data, fullScreen, ...props }) => (
  <div>
    {!fullScreen && <AmountSpentChartSelector {...props} />}
    <SpotMatrix data={data} />
  </div>
);

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  fullScreen: PropTypes.bool,
};

Chart.defaultProps = {
  fullScreen: PropTypes.false,
};

export default Chart;
