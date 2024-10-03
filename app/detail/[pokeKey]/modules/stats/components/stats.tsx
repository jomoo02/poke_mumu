'use client';

import React from 'react';
import { PokeTypeType } from '@/app/types/pokeType.type';
import StatRow from './stat-row';
import {
  combineStatsWithEffort,
  calculateMaxStat,
} from '../utils/statUtils';
import { StatType } from '../types/stat.type';

export default function Stats({
  baseStats,
  effortStats,
  type,
}: {
  baseStats: StatType[],
  effortStats: StatType[],
  type: PokeTypeType,
}) {
  const combinedStats = combineStatsWithEffort(baseStats, effortStats);

  const maxStatValue = calculateMaxStat(baseStats);

  return (
    <div className={`grid border-2 border-t-0 ${type}-border divide-y rounded-b-sm`}>
      {combinedStats.map((statObj) => (
        <StatRow.BasicStat
          key={statObj.stat}
          statObj={statObj}
          maxStatValue={maxStatValue}
        />
      ))}
      <StatRow.TotalStat baseStats={baseStats} effortStats={effortStats} />
    </div>
  );
}
