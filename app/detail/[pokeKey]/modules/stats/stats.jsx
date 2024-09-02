import React from 'react';
import StatRow from './stat-row';
import {
  combineStatsWithEffort,
  calculateMaxStat,
} from './utils';
import TotalStatRow from './stat-row-total';

export default function Stats({
  baseStats,
  effortStats,
  type,
}) {
  const combinedStats = combineStatsWithEffort(baseStats, effortStats);

  console.log(combinedStats);

  const maxStatValue = calculateMaxStat(baseStats);

  return (
    <div className={`grid border-2 border-t-0 ${type}-border divide-y rounded-b-sm`}>
      {combinedStats.map((statObj) => (
        <StatRow
          key={statObj.stat}
          statObj={statObj}
          maxStatValue={maxStatValue}
        />
      ))}
      <TotalStatRow baseStats={baseStats} effortStats={effortStats} />
    </div>
  );
}
