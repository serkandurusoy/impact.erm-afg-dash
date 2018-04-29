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
        High: d['1'],
        Medium: d['2'],
        'No or Low': d['3'],
        x: d.general_infoq1_province,
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
      <Legend verticalAlign="top" />
      <Bar dataKey="High" fill="#ED4E4F" />
      <Bar dataKey="Medium" fill="#b27272" />
      <Bar dataKey="No or Low" fill="#f2b8b8" />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
