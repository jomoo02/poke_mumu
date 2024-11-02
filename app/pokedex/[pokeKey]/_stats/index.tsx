import React from 'react';
import { getPoke } from '../utils/get';
import Header from '../components/header';
import { headerKeys } from '../data/header';
import Stats from './components/stats';

interface PokeStatsProps {
  pokeKey: string;
}

export default async function PokeStats({
  pokeKey,
}: PokeStatsProps) {
  const poke = await getPoke(pokeKey);

  if (!poke) {
    return null;
  }

  const {
    types,
    stats,
  } = poke;

  const type = types[0];

  const headerKey = headerKeys.stats;

  return (
    <div>
      <Header type={type} headerKey={headerKey} />
      <div className={`grid border-2 border-t-0 ${type}-border divide-y rounded-b-sm`}>
        <Stats
          statItems={stats}
        />
      </div>
    </div>
  );
}
