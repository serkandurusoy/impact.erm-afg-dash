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

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      data={data.map(d => ({
        ...d,
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
      <Legend />
      <Bar dataKey="well_function_busy" fill="#ED4E4F" />
      <Bar dataKey="moderate_function" fill="#f2b8b8" />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
