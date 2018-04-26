import React from 'react';
import PropTypes from 'prop-types';
import { Treemap } from 'recharts';

const Chart = ({ data }) => (
  <Treemap
    width={800}
    height={400}
    data={data.map(d => ({
      name: d.S3_GEN_ASSESSq3_2_1_province_origin,
      children: [
        {
          name: d.S3_GEN_ASSESSq3_2_1_province_origin,
          value: d.count,
        },
      ],
    }))}
    dataKey="value"
    ratio={4 / 3}
    stroke="#fff"
    fill="#8884d8"
  />
);

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
