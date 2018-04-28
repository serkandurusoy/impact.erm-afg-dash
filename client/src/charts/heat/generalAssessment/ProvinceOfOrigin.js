import React from 'react';
import PropTypes from 'prop-types';
import { Treemap } from 'recharts';

const COLORS = [
  '#8889DD',
  '#9597E4',
  '#8DC77B',
  '#A5D297',
  '#E2CF45',
  '#F8C12D',
];
/* eslint-disable */
const CustomizedContent = ({
  root,
  depth,
  x,
  y,
  width,
  height,
  index,
  colors,
  name,
}) => (
  <g>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      style={{
        fill:
          depth < 2
            ? colors[Math.floor(index / root.children.length * 6)]
            : 'none',
        stroke: '#fff',
        strokeWidth: 2 / (depth + 1e-10),
        strokeOpacity: 1 / (depth + 1e-10),
      }}
    />
    {depth === 1 ? (
      <text
        x={x + width / 2}
        y={y + height / 2 + 7}
        textAnchor="middle"
        fill="#fff"
        fontSize={14}
      >
        {name}
      </text>
    ) : null}
    {depth === 1 ? (
      <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
        {index + 1}
      </text>
    ) : null}
  </g>
);

const Chart = ({ data }) => (
  <Treemap
    width={800}
    height={400}
    data={data.map(d => { console.log(d.count); return {
      name: d.S3_GEN_ASSESSq3_2_1_province_origin,
      children: [
        {
          name: d.S3_GEN_ASSESSq3_2_1_province_origin,
          value: d.count,
        },
      ],
    }})}
    dataKey="value"
    ratio={4 / 3}
    stroke="#fff"
    fill="#8884d8"
    content={<CustomizedContent colors={COLORS} />}
  />
);

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
