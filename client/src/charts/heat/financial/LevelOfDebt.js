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

const index = ['no_dept', 'less_afs_2000', 'between_2000_8000', 'more_8000'];

const Chart = ({ data }) => {
  const sum = data.reduce((total, d) => total + d.count, 0);

  const dataMap = data
    .sort(
      (
        { S4_financial_ASSESSq4_5_new_debts: l },
        { S4_financial_ASSESSq4_5_new_debts: r },
      ) => (index.indexOf(l) > index.indexOf(r) ? 1 : -1),
    )
    .map(d => ({
      ...d,
      percent: parseFloat((sum > 0 ? d.count / sum * 100 : 0).toFixed(2)),
      x:
        LABELS.value.S4_financial_ASSESSq4_5_new_debts[
          d.S4_financial_ASSESSq4_5_new_debts
        ] || d.S4_financial_ASSESSq4_5_new_debts,
    }));

  return (
    <ResponsiveContainer height={400}>
      <BarChart data={dataMap}>
        <XAxis dataKey="x" tick={{ fontWeight: 'bold' }} />
        <YAxis tick={{ fontWeight: 'bold' }} />
        <Tooltip
          content={({ payload, label }) =>
            payload &&
            payload[0] && (
              <div className="graph__tooltip">
                {payload[0].payload.count} ({payload[0].payload.percent}%) HHs
                with reported debt of {'"'}
                {label}
                {'"'}
              </div>
            )
          }
        />
        <Bar dataKey="percent" fill="#0067a9" />
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
