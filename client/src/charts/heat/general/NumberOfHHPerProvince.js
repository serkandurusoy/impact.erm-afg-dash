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
          x: province.label,
        };
      })}
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
      <Tooltip
        content={({ payload, label }) =>
          payload &&
          payload[0] && (
            <div className="graph__tooltip">
              {payload[0].payload.count} HHs with {payload[0].payload.sum}{' '}
              individuals assessed in {label}
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
