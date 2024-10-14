import React from 'react';
import { fetchPokeKey } from '../../api/poke';
import { fetchDetail } from '../../api/detail';
import Stats from './components/stats';
import Header from '../../components/header';
import SubHeader from './components/sub-header';
import { headerKeys } from '../../data/header';

export default async function PokeStats({ pokeKey }: { pokeKey: string }) {
  const [poke, detail] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  if (!poke || !detail) {
    return null;
  }

  const { types } = poke;

  if (!types) {
    return null;
  }

  const { stats: { baseStats, effortStats } } = detail;

  const type = types[0];

  const headerKey = headerKeys.stats;

  return (
    <div>
      <Header type={type} headerKey={headerKey} />
      <SubHeader type={type} />
      <Stats
        baseStats={baseStats}
        effortStats={effortStats}
        type={type}
      />
    </div>
  );
}
