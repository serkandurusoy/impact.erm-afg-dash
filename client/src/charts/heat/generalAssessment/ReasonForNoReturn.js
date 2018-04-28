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
    <BarChart data={data.map(d => ({ ...d, x: d.S3_GEN_ASSESSq3_4_1_if_no }))}>
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip
        content={({ payload, label }) =>
          payload[0] && (
            <div className="graph__tooltip">
              {payload[0].payload.count} individuals not being able to return to
              origin because of {label}
            </div>
          )
        }
      />
      <Bar dataKey="count" fill="#ee4e4e" />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
