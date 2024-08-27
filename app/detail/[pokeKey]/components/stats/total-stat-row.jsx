import React from 'react';
import { sumStats } from '../../utils/stats';
import StatRow from './stat-row';

export default function TotalStatRow({ baseStats, effortStats }) {
  const totalStat = sumStats(baseStats);
  const totalEffort = sumStats(effortStats);

  return (
    <StatRow
      stat="total"
      value={totalStat}
      effortValue={totalEffort}
      className="font-semibold"
    />
  );
}
