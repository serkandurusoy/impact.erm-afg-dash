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

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      data={data.map(d => ({ ...d, x: getLabel(d.S3_GEN_ASSESSq3_4_1_if_no) }))}
    >
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
              {payload[0].payload.count} individuals not being able to return to
              origin because of {label}
            </div>
          )
        }
      />
      <Bar
        dataKey="count"
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
