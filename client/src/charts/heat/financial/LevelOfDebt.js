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

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      data={data
        .sort(
          (
            { S4_financial_ASSESSq4_5_new_debts: l },
            { S4_financial_ASSESSq4_5_new_debts: r },
          ) => (index.indexOf(l) > index.indexOf(r) ? 1 : -1),
        )
        .map(d => ({
          ...d,
          x:
            LABELS.value.S4_financial_ASSESSq4_5_new_debts[
              d.S4_financial_ASSESSq4_5_new_debts
            ] || d.S4_financial_ASSESSq4_5_new_debts,
        }))}
    >
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip
        content={({ payload, label }) =>
          payload &&
          payload[0] && (
            <div className="graph__tooltip">
              {payload[0].payload.count} HHs with {payload[0].payload.sum}{' '}
              individuals assessed by {label}
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
