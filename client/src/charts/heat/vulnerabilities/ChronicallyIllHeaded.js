import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { PieChartLabel } from '../../../components';

const Chart = ({ data }) => {
  const dataMap = [
    {
      name: 'Others',
      value: data.total - data.S2_AdditionalVulnerabilityq2_5_chronically,
      percent: parseFloat(
        (data.total > 0
          ? (data.total - data.S2_AdditionalVulnerabilityq2_5_chronically) /
            data.total *
            100
          : 0
        ).toFixed(2),
      ),
    },
    {
      name: 'Count',
      value: data.S2_AdditionalVulnerabilityq2_5_chronically,
      percent: parseFloat(
        (data.total > 0
          ? data.S2_AdditionalVulnerabilityq2_5_chronically / data.total * 100
          : 0
        ).toFixed(2),
      ),
    },
  ];

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
              xNegativeOffset={-18}
              xPositiveOffset={22}
              yOffset={6}
            />
          )}
          labelLine={false}
        >
          {dataMap.map(d => (
            <Cell
              key={d.name}
              fill={d.name === 'Count' ? '#072a53' : '#ee4e4e'}
            />
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
