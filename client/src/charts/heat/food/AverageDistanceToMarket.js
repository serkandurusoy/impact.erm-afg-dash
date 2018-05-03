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
import chroma from 'chroma-js';

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      data={data
        .sort(
          (a, b) =>
            b.S5_FOOD_ASSESSq5_2_distance_marketmin -
            a.S5_FOOD_ASSESSq5_2_distance_marketmin,
        )
        .map(d => ({
          ...d,
          x: d.general_infoq1_province,
          min: d.S5_FOOD_ASSESSq5_2_distance_marketmin,
          label: d.general_infoq1_province,
        }))}
      layout="vertical"
    >
      <YAxis
        dataKey="x"
        width={100}
        interval={0}
        tickMargin={20}
        tickCount={1}
        type="category"
      />
      <XAxis type="number" />
      <Tooltip
        content={({ payload, label }) =>
          payload &&
          payload[0] && (
            <div className="graph__tooltip">
              In {label} province HH reported an average{' '}
              {Math.round(payload[0].payload.min)} minutes travel time to reach
              the next market
            </div>
          )
        }
      />
      <Bar
        dataKey="S5_FOOD_ASSESSq5_2_distance_marketmin"
        fill={`${chroma('#a5c9a1')
          .darken(1)
          .hex()}`}
      />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
