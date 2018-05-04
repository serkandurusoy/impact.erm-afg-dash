import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import chroma from 'chroma-js';
import { getLabel } from '../../../constants/labels';

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      data={data.map(d => ({
        [getLabel('well_function_busy')]: d.well_function_busy,
        [getLabel('moderate_function')]: d.moderate_function,
        x: d.Province,
      }))}
    >
      <XAxis
        dataKey="x"
        height={80}
        angle={90}
        interval={0}
        tickMargin={40}
        tickCount={1}
      />
      <YAxis />
      <Tooltip />
      <Legend
        wrapperStyle={{ fontSize: 14, fontWeight: 'bold', marginLeft: 42 }}
      />
      <Bar
        dataKey={getLabel('well_function_busy')}
        fill={`${chroma('#f69e61')
          .brighten(1.5)
          .hex()}`}
      />
      <Bar dataKey={getLabel('moderate_function')} fill="#f69e61" />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
