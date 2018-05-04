import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import chroma from 'chroma-js';
import { getLabel } from '../../../constants/labels';

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      data={data.map(d => ({
        [getLabel('large')]: d.large,
        [getLabel('medium')]: d.medium,
        [getLabel('small')]: d.small,
        x: d.Province,
      }))}
    >
      <XAxis
        dataKey="x"
        height={80}
        angle={90}
        interval={0}
        tickMargin={40}
        tickCount={1}
      />
      <YAxis />
      <Tooltip />
      <Legend wrapperStyle={{ fontSize: 14, fontWeight: 'bold' }} />
      <Bar dataKey={getLabel('large')} fill="#a5c9a1" />
      <Bar
        dataKey={getLabel('medium')}
        fill={`${chroma('#a5c9a1')
          .darken(1)
          .hex()}`}
      />
      <Bar
        dataKey={getLabel('small')}
        fill={`${chroma('#a5c9a1')
          .darken(1.5)
          .hex()}`}
      />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
