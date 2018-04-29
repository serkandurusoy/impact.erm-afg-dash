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
import { getLabel } from '../../../constants/labels';

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      data={data.map(d => ({
        ...d,
        x: getLabel(d.S5_FOOD_ASSESSq5_5_food_stocks),
      }))}
    >
      <XAxis
        dataKey="x"
        height={80}
        angle={45}
        interval={0}
        tickMargin={40}
        tickCount={1}
      />
      <YAxis />
      <Tooltip
        content={({ payload, label }) =>
          payload &&
          payload[0] && (
            <div className="graph__tooltip">
              {payload[0].payload.count} individuals reported to have food
              stocks available for {label}
            </div>
          )
        }
      />
      <Bar dataKey="count" fill="#ee4e4e" />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
