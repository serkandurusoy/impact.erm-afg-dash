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
import LABELS from '../../../constants/labels';

const Chart = ({ data }) => {
  const sum = data.reduce((total, d) => total + d.count, 0);

  const dataMap = data.map(d => ({
    ...d,
    percent: parseFloat((sum > 0 ? d.count / sum * 100 : 0).toFixed(2)),
    x:
      LABELS.value.S3_GEN_ASSESSq3_1_disp_categ[
        d.S3_GEN_ASSESSq3_1_disp_categ
      ] || d.S3_GEN_ASSESSq3_1_disp_categ,
  }));

  return (
    <ResponsiveContainer height={400}>
      <BarChart data={dataMap}>
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip
          content={({ payload, label }) =>
            payload &&
            payload[0] && (
              <div className="graph__tooltip">
                {payload[0].payload.count} ({payload[0].payload.percent}%)
                individuals reported {'"'}
                {label}
                {'"'} as their displacement category
              </div>
            )
          }
        />
        <Bar dataKey="percent" fill="#f69e61" />
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
