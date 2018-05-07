import React from 'react';
import PropTypes from 'prop-types';
import { SpotMatrix } from '../../../components';

const Chart = ({ data }) => <SpotMatrix data={data} color="#3C523B" />;

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
