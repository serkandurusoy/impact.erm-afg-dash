import React from 'react';
import PropTypes from 'prop-types';
import { SpotMatrix } from '../../../components';

const Chart = ({ data }) => <SpotMatrix data={data} />;

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
