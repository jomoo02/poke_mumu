import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchDetail } from '@/app/api/detail';
import Stats from './components/stats';
import Header from '../../components/header';
import SubHeader from './components/sub-header';

export default async function PokeStats({ pokeKey }) {
  const [
    { types },
    { stats: { baseStats, effortStats } },
  ] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  const type = types[0];

  const headerTexts = {
    ko: '스탯',
    en: 'stat',
  };

  return (
    <div>
      <Header type={type} headerTexts={headerTexts} />
      <SubHeader type={type} />
      <Stats
        baseStats={baseStats}
        effortStats={effortStats}
        type={type}
      />
    </div>
  );
}
