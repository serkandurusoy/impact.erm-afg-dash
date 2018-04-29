import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      data={data.map(d => ({ ...d, x: d.S3_GEN_ASSESSq3_1_disp_categ }))}
    >
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip
        content={({ payload, label }) =>
          payload[0] && (
            <div className="graph__tooltip">
              {payload[0].payload.count} individuals reported {label} as their
              displacement category
            </div>
          )
        }
      />
      <Bar dataKey="count" fill="#ee4e4e" />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.oneOfType(PropTypes.object, PropTypes.array).isRequired,
};

export default Chart;
