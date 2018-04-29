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
      layout="vertical"
      data={[
        {
          x: 'New Born',
          male:
            data[
              Object.keys(data).filter(
                k => k.includes('new_born') && k.includes('male'),
              )[0]
            ],
          female:
            0 -
            data[
              Object.keys(data).filter(
                k => k.includes('new_born') && k.includes('female'),
              )[0]
            ],
        },
        {
          x: 'Children 6 - 18',
          male:
            data[
              Object.keys(data).filter(
                k => k.includes('6_18') && k.includes('male'),
              )[0]
            ],
          female:
            0 -
            data[
              Object.keys(data).filter(
                k => k.includes('6_18') && k.includes('female'),
              )[0]
            ],
        },
        {
          x: 'Adults 19 - 59',
          male:
            data[
              Object.keys(data).filter(
                k => k.includes('19_59') && k.includes('male'),
              )[0]
            ],
          female:
            0 -
            data[
              Object.keys(data).filter(
                k => k.includes('19_59') && k.includes('female'),
              )[0]
            ],
        },
        {
          x: 'Elders above 60',
          male:
            data[
              Object.keys(data).filter(
                k => k.includes('60') && k.includes('male'),
              )[0]
            ],
          female:
            0 -
            data[
              Object.keys(data).filter(
                k => k.includes('60') && k.includes('female'),
              )[0]
            ],
        },
      ]}
    >
      <YAxis dataKey="x" type="category" />
      <XAxis type="number" />
      <Tooltip />
      <Legend />
      <Bar dataKey="male" fill="#ED4E4F" />
      <Bar dataKey="female" fill="#f2b8b8" />
    </BarChart>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Chart;
