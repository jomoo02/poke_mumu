import React, { Suspense } from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchDetail } from '@/app/api/detail';
import { sumStats, combineStatsWithEffort, calculateMaxStat } from '../../utils/stats';
import BarChart from './bar';
import StatRow from './stat-row';
import Header from '../header';
import SubHeader from './sub-header';
import StatsSkeleton from './skeleton';

function TotalStatRow({ baseStats, effortStats }) {
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
async function Stats({ pokeKey }) {
  const [{ types }, { stats: { baseStats, effortStats } }] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  const type = types[0];

  const statObj = combineStatsWithEffort(baseStats, effortStats);

  const maxStatValue = calculateMaxStat(baseStats);
  return (
    <div>
      <Header category="stats" type={type} />
      <SubHeader type={type} />
      <div className={`grid border-2 border-t-0 ${type}-border divide-y rounded-b-sm`}>
        {statObj.map(({ stat, value, effortValue }) => (
          <StatRow key={stat} stat={stat} value={value} effortValue={effortValue}>
            <BarChart value={value} max={maxStatValue} />
          </StatRow>
        ))}
        <TotalStatRow baseStats={baseStats} effortStats={effortStats} />
      </div>
    </div>
  );
}

export default function PokeStats({ pokeKey }) {
  return (
    <Suspense fallback={<StatsSkeleton />}>
      <Stats pokeKey={pokeKey} />
    </Suspense>
  );
}
