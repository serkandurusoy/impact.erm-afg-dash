import React from 'react';
import PropTypes from 'prop-types';
import { Treemap, Tooltip, ResponsiveContainer } from 'recharts';
import chroma from 'chroma-js';

const colorScale = chroma.scale(['#F5F5F5', 'ee4e4e']);

const buildColors = (data = []) => {
  const maxCount = Math.max(...data.map(d => d.count));
  return data
    .filter(
      d =>
        !!d.count &&
        d.count !== 'null' &&
        d.count > 0 &&
        !!d.s8_prioritiesthird &&
        d.s8_prioritiesthird != 'null', // eslint-disable-line
    )
    .map(d => colorScale(d.count / maxCount).hex());
};

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
      <text x={x + 4} y={y + 12} fill="#000" stroke="none" fontSize={10}>
        {name}
      </text>
    ) : null}
  </g>
);

CustomizedContent.propTypes = {
  colors: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  root: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  depth: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
};

CustomizedContent.defaultProps = {
  root: {},
  depth: 0,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  index: 0,
  name: '',
};

const Chart = ({ data }) => (
  <ResponsiveContainer height={400}>
    <Treemap
      width={800}
      height={400}
      data={data
        .filter(
          d =>
            !!d.count &&
            d.count !== 'null' &&
            d.count > 0 &&
            !!d.s8_prioritiesthird &&
          d.s8_prioritiesthird != 'null', // eslint-disable-line
        )
        .map(d => ({
          name: d.s8_prioritiesthird,
          count: d.count,
        }))}
      dataKey="count"
      ratio={4 / 3}
      stroke="#fff"
      fill="#8884d8"
      content={<CustomizedContent colors={buildColors(data)} />}
    >
      <Tooltip
        content={({ payload }) =>
          payload &&
          payload[0] && (
            <div className="graph__tooltip">
              {payload[0].payload.name}: {payload[0].payload.count}
            </div>
          )
        }
      />
    </Treemap>
  </ResponsiveContainer>
);

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
