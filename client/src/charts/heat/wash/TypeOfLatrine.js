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

const Chart = ({ data }) => {
  const sum = data.reduce((total, d) => total + d.count, 0);

  const dataMap = data.map(d => ({
    ...d,
    percent: parseFloat((sum > 0 ? d.count / sum * 100 : 0).toFixed(2)),
    x: getLabel(d.S6_washq6_6_latrine_type),
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
        />
        <YAxis />
        <Tooltip
          content={({ payload, label }) =>
            payload &&
            payload[0] && (
              <div className="graph__tooltip">
                {payload[0].payload.count} ({payload[0].payload.percent}%)
                individuals reported to have {'"'}
                {label}
                {'"'} type of latrine
              </div>
            )
          }
        />
        <Bar dataKey="percent" fill="#ee4e4e" />
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
