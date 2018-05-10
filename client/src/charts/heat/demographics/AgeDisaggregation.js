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

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <BarChart
      stackOffset="sign"
      layout="vertical"
      data={[
        {
          x: 'New Born',
          Male:
            data[
              Object.keys(data).filter(
                k => k.includes('new_born') && k.includes('male'),
              )[0]
            ],
          Female:
            0 -
            data[
              Object.keys(data).filter(
                k => k.includes('new_born') && k.includes('female'),
              )[0]
            ],
        },
        {
          x: 'Children 6 - 18',
          Male:
            data[
              Object.keys(data).filter(
                k => k.includes('6_18') && k.includes('male'),
              )[0]
            ],
          Female:
            0 -
            data[
              Object.keys(data).filter(
                k => k.includes('6_18') && k.includes('female'),
              )[0]
            ],
        },
        {
          x: 'Adults 19 - 59',
          Male:
            data[
              Object.keys(data).filter(
                k => k.includes('19_59') && k.includes('male'),
              )[0]
            ],
          Female:
            0 -
            data[
              Object.keys(data).filter(
                k => k.includes('19_59') && k.includes('female'),
              )[0]
            ],
        },
        {
          x: 'Elders above 60',
          Male:
            data[
              Object.keys(data).filter(
                k => k.includes('60') && k.includes('male'),
              )[0]
            ],
          Female:
            0 -
            data[
              Object.keys(data).filter(
                k => k.includes('60') && k.includes('female'),
              )[0]
            ],
        },
      ]}
    >
      <YAxis dataKey="x" type="category" tick={{ fontWeight: 'bold' }} />
      <XAxis type="number" tick={{ fontWeight: 'bold' }} />
      <Tooltip formatter={value => Math.abs(value)} />
      <Legend
        wrapperStyle={{ fontSize: 14, fontWeight: 'bold', marginLeft: 18 }}
      />
      <Bar dataKey="Male" fill="#072A53" stackId="stack" />
      <Bar dataKey="Female" fill="#EE4E4E" stackId="stack" />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
