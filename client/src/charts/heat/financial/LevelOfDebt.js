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
      data={data.map(d => {
        console.log(d);
        return { ...d, x: d.S4_financial_ASSESSq4_5_new_debts };
      })}
    >
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip
        content={({ payload, label }) =>
          payload[0] && (
            <div className="graph__tooltip">
              {payload[0].payload.count} HHs with {payload[0].payload.sum}{' '}
              individuals assessed by {label}
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
