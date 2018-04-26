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
import PROVINCE_INFO from '../../../constants/province-info';

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      data={data.map(d => {
        const province = PROVINCE_INFO.find(
          ({ name }) => name === d.general_infoq1_province,
        );
        return {
          ...d,
          label: province.label,
          x: province.id,
        };
      })}
    >
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip
        content={({ payload }) =>
          payload[0] && (
            <div className="graph__tooltip">
              {payload[0].payload.count} HHs with {payload[0].payload.sum}{' '}
              individuals assessed in {payload[0].payload.label}
            </div>
          )
        }
      />
      <Bar dataKey="count" fill="#ee4e4e" />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
