import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from 'recharts';

const colors = [
  '#ee4e4e',
  '#072a53',
  '#a5c9a1',
  '#f69e61',
  '#fff67a',
  '#56b3cd',
  '#0067a9',
  '#95a0a9',
];

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      data={data.map(d => ({ ...d, x: d.general_infoq5_organization }))}
    >
      <XAxis dataKey="x" tick={{ fontWeight: 'bold' }} />
      <YAxis tick={{ fontWeight: 'bold' }} />
      <Tooltip
        content={({ payload, label }) =>
          payload &&
          payload[0] && (
            <div className="graph__tooltip">
              {payload[0].payload.count} HHs with {payload[0].payload.sum}{' '}
              individuals assessed by {label}
            </div>
          )
        }
      />
      <Bar dataKey="count" fill="#ee4e4e">
        {data.map((d, index) => (
          <Cell key={d.general_infoq5_organization} fill={colors[index]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
