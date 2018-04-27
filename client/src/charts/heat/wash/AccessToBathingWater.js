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
        x: d.general_infoq1_province,
      }))}
    >
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="yes" fill="#ED4E4F" />
      <Bar dataKey="no" fill="#f2b8b8" />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
