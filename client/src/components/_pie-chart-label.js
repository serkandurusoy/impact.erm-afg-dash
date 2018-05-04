import React from 'react';
import PropTypes from 'prop-types';

const PieChartLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  fill,
  value,
  xNegativeOffset,
  xPositiveOffset,
  yOffset,
}) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  const mx = cx + (outerRadius + 15) * cos;
  const my = cy + (outerRadius + 15) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 8;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <text
        x={ex + (cos >= 0 ? xNegativeOffset : xPositiveOffset)}
        y={ey - yOffset}
        textAnchor={textAnchor}
        fill={fill}
      >
        {`${value}`}
        <tspan dx={0.7}>%</tspan>
      </text>
    </g>
  );
};

PieChartLabel.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  midAngle: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  xNegativeOffset: PropTypes.number.isRequired,
  xPositiveOffset: PropTypes.number.isRequired,
  yOffset: PropTypes.number.isRequired,
};

export default PieChartLabel;
