import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const Chart = ({ data }) => {
  const dataMap = [
    {
      name: 'Others',
      value: data.total - data.S2_AdditionalVulnerabilityq2_2_female_hdd,
      percent: parseFloat(
        (data.total > 0
          ? (data.total - data.S2_AdditionalVulnerabilityq2_2_female_hdd) /
            data.total *
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
          ? data.S2_AdditionalVulnerabilityq2_2_female_hdd / data.total * 100
          : 0
        ).toFixed(2),
      ),
    },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={dataMap}
        dataKey="percent"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={130}
        outerRadius={150}
        fill="#8884d8"
        label={({ value }) => `${value} %`}
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
  );
};

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
