import React from 'react';
import PropTypes from 'prop-types';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import chroma from 'chroma-js';

import { PieChartLabel } from '../../../components';

const Chart = ({ data }) => {
  const sum = Object.values(data).reduce((total, d) => total + d, 0);

  const dataMap = Object.entries(data).map(([k, v]) => ({
    name: k[0].toUpperCase() + k.substr(1),
    value: v,
    percent: parseFloat((sum > 0 ? v / sum * 100 : 0).toFixed(2)),
  }));

  return (
    <ResponsiveContainer height={400}>
      <PieChart>
        <Pie
          data={dataMap}
          dataKey="percent"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="65%"
          outerRadius="75%"
          fill="#8884d8"
          label={({ cx, cy, midAngle, outerRadius, fill, value }) => (
            <PieChartLabel
              cx={cx}
              cy={cy}
              midAngle={midAngle}
              outerRadius={outerRadius}
              fill={fill}
              value={value}
              xNegativeOffset={-15}
              xPositiveOffset={18}
              yOffset={6}
            />
          )}
          labelLine={false}
        >
          {dataMap.map(d => (
            <Cell
              key={d.name}
              fill={
                d.name === 'Yes'
                  ? `${chroma('#a5c9a1')
                      .darken(1)
                      .hex()}`
                  : `${chroma('#ee4e4e')
                      .brighten(0.7)
                      .hex()}`
              }
            />
          ))}
        </Pie>
        <Legend wrapperStyle={{ fontSize: 14, fontWeight: 'bold' }} />
        <Tooltip
          content={({ payload }) =>
            payload &&
            payload[0] && (
              <div className="graph__tooltip">
                {payload[0].payload.name}: {payload[0].payload.value} ({
                  payload[0].payload.percent
                }%)
              </div>
            )
          }
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
