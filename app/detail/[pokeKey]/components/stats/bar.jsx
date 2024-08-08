import React from 'react';

function getBarColor(value) {
  if (value > 200) {
    return '#06b6d4';
  } if (value >= 130) {
    return '#22c55e';
  } if (value >= 100) {
    return '#84cc16';
  } if (value >= 70) {
    return '#fbbf24';
  } if (value >= 30) {
    return '#f97316';
  }
  return '#dc2626';
}

export default function BarChart({ value, max }) {
  const normalizationFactor = max < 200 ? 255 : 300;
  const normalizedWidth = `${(value / normalizationFactor) * 100}%`;
  const barColor = getBarColor(value);

  return (
    <svg width="100%" height="11">
      <g className="bars">
        <rect fill={barColor} width={normalizedWidth} height="11" rx="4" />
      </g>
    </svg>
  );
}
