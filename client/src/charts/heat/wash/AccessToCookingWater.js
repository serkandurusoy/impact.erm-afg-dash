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
    yes: data.reduce((total, d) => total + d.yes, 0),
    no: data.reduce((total, d) => total + d.no, 0),
  };

  const dataMap = data.map(d => ({
    ...d,
    'Yes %': parseFloat((sum.yes > 0 ? d.yes / sum.yes * 100 : 0).toFixed(2)),
    'No %': parseFloat((sum.no > 0 ? d.no / sum.no * 100 : 0).toFixed(2)),
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
                Yes: {payload[0].payload.yes} ({payload[0].payload['Yes %']}%)<br />
                No: {payload[0].payload.no} ({payload[0].payload['No %']}%)
              </div>
            )
          }
        />
        <Legend wrapperStyle={{ fontSize: 14, fontWeight: 'bold' }} />
        <Bar dataKey="Yes %" fill="#072a53" />
        <Bar dataKey="No %" fill="#ee4e4e" />
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
