import React from 'react';

interface StatRowBarProps {
  value: number;
  max: number;
}

function setBarColor(value: number) {
  if (value > 200) return '#06b6d4';
  if (value >= 130) return '#22c55e';
  if (value >= 100) return '#84cc16';
  if (value >= 70) return '#fbbf24';
  if (value >= 30) return '#f97316';
  return '#dc2626';
}

function calculateBarWidth(currentStat: number, referenceStat: number) {
  const scaleFactor = referenceStat < 200 ? 255 : 300;
  const barWidth = `${(currentStat / scaleFactor) * 100}%`;

  return barWidth;
}

export default function StatRowBar({
  value,
  max,
}: StatRowBarProps) {
  const width = calculateBarWidth(value, max);

  const barColor = setBarColor(value);

  return (
    <svg width="100%" height="11">
      <g className="bars">
        <rect fill={barColor} width={width} height="11" rx="4" />
      </g>
    </svg>
  );
}
