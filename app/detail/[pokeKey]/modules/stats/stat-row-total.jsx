import React from 'react';
import { sumStats } from './utils';
import StatRow from './stat-row';

export default function TotalStatRow({ baseStats, effortStats }) {
  const totalStat = sumStats(baseStats);
  const totalEffort = sumStats(effortStats);

  const statObj = {
    stat: 'total',
    value: totalStat,
    effortValue: totalEffort,
  };

  return (
    <StatRow
      statObj={statObj}
      className="font-semibold"
    />
  );
}
