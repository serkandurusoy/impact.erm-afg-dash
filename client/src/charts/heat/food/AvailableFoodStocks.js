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
import { getLabel } from '../../../constants/labels';

const order = [
  'No_Stocks',
  'Less_than_a_week',
  '1_to_3_weeks',
  'Up_to_3_months',
  'Over_3_months',
];

const Chart = ({ data }) => {
  const sum = data.reduce((total, d) => total + d.count, 0);

  const dataMap = data
    .sort(
      (
        { S5_FOOD_ASSESSq5_5_food_stocks: l },
        { S5_FOOD_ASSESSq5_5_food_stocks: r },
      ) => (order.indexOf(l) > order.indexOf(r) ? 1 : -1),
    )
    .map(d => ({
      ...d,
      percent: parseFloat((sum > 0 ? (d.count / sum) * 100 : 0).toFixed(2)),
      x: getLabel(d.S5_FOOD_ASSESSq5_5_food_stocks),
    }));

  return (
    <ResponsiveContainer height={400}>
      <BarChart data={dataMap}>
        <XAxis
          dataKey="x"
          height={80}
          angle={45}
          interval={0}
          tickMargin={40}
          tickCount={1}
          tick={{ fontWeight: 'bold' }}
        />
        <YAxis tick={{ fontWeight: 'bold' }} />
        <Tooltip
          content={({ payload, label }) =>
            payload &&
            payload[0] && (
              <div className="graph__tooltip">
                {payload[0].payload.count} ({payload[0].payload.percent}%)
                individuals reported to have food stocks available for {'"'}
                {label}
                {'"'}
              </div>
            )
          }
        />
        <Bar
          dataKey="percent"
          fill={`${chroma('#f69e61')
            .darken(1)
            .hex()}`}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
