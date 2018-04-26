import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import chroma from 'chroma-js';

const colorScale = chroma.scale(['ffffff', 'ee4e4e']);

const Chart = ({ data }) => {
  const dataMap = [
    {
      name: 'Others',
      value: data.total - data.S2_AdditionalVulnerabilityq2_5_chronically,
    },
    { name: 'Count', value: data.S2_AdditionalVulnerabilityq2_5_chronically },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={dataMap}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      >
        {dataMap.map(d => (
          <Cell
            key={d.name}
            fill={colorScale(
              d.value / dataMap.reduce((t, v) => t + v.value, 0),
            ).hex()}
          />
        ))}
      </Pie>
      <Tooltip
        formatter={value =>
          `${value} (${(value / data.total * 100).toFixed(2)}%)`
        }
      />
    </PieChart>
  );
};

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
