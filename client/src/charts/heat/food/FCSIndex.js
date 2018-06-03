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

const Chart = ({ data }) => {
  const sum = {
    '1': data.reduce((total, d) => total + d['1'], 0),
    '2': data.reduce((total, d) => total + d['2'], 0),
    '3': data.reduce((total, d) => total + d['3'], 0),
  };

  const dataMap = data.map(d => ({
    ...d,
    'High %': parseFloat(
      (sum['1'] > 0 ? (d['1'] / sum['1']) * 100 : 0).toFixed(2),
    ),
    'Medium %': parseFloat(
      (sum['2'] > 0 ? (d['2'] / sum['2']) * 100 : 0).toFixed(2),
    ),
    'No or Low %': parseFloat(
      (sum['3'] > 0 ? (d['3'] / sum['3']) * 100 : 0).toFixed(2),
    ),
    x: d.general_infoq1_province,
  }));

  return (
    <ResponsiveContainer height={400}>
      <BarChart data={dataMap}>
        <XAxis
          dataKey="x"
          height={80}
          angle={270}
          interval={0}
          tickMargin={40}
          tickCount={1}
          tick={{ fontWeight: 'bold' }}
        />
        <YAxis tick={{ fontWeight: 'bold' }} />
        <Tooltip
          content={({ payload }) =>
            payload &&
            payload[0] && (
              <div className="graph__tooltip">
                High: {payload[0].payload['1']} ({payload[0].payload['High %']}%)<br />
                Medium: {payload[0].payload['2']} ({
                  payload[0].payload['Medium %']
                }%)<br />
                No or Low: {payload[0].payload['3']} ({
                  payload[0].payload['No or Low %']
                }%)
              </div>
            )
          }
        />
        <Legend
          verticalAlign="top"
          wrapperStyle={{ fontSize: 14, fontWeight: 'bold', marginLeft: 8 }}
        />
        <Bar dataKey="High %" fill="#072a53" />
        <Bar dataKey="Medium %" fill="#f69e61" />
        <Bar dataKey="No or Low %" fill="#ee4e4e" />
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
