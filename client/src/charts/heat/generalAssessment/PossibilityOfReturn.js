import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { PieChartLabel } from '../../../components';

const colors = ['#072a53', '#ee4e4e', '#a5c9a1'];

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
              xNegativeOffset={-20}
              xPositiveOffset={22}
              yOffset={6}
            />
          )}
          labelLine={false}
        >
          {dataMap.map((d, index) => (
            <Cell key={d.name} fill={colors[index]} />
          ))}
        </Pie>
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
