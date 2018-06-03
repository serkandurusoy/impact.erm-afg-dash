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
  const dataMap = [
    {
      name: 'Others',
      value: data.total - data.S2_AdditionalVulnerabilityq2_2_female_hdd,
      percent: parseFloat(
        (data.total > 0
          ? ((data.total - data.S2_AdditionalVulnerabilityq2_2_female_hdd) /
              data.total) *
            100
          : 0
        ).toFixed(2),
      ),
    },
    {
      name: 'Count',
      value: data.S2_AdditionalVulnerabilityq2_2_female_hdd,
      percent: parseFloat(
        (data.total > 0
          ? (data.S2_AdditionalVulnerabilityq2_2_female_hdd / data.total) * 100
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
              fill={
                d.name === 'Count'
                  ? '#072a53'
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
