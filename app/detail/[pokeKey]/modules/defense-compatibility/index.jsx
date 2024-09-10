import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import Header from '../../components/header';
import DefenseCompatibility from './components/defense-compatibility';

export default async function PokeDefenseCompatibility({ pokeKey }) {
  const { types } = await fetchPokeKey(pokeKey);

  if (!types || types.length === 0) {
    return null;
  }

  const mainType = types[0];

  const headerTexts = {
    ko: '방어 상성',
    en: 'defense Compatibility',
  };

  return (
    <div>
      <Header
        type={mainType}
        headerTexts={headerTexts}
      />
      <DefenseCompatibility pokeTypes={types} />
    </div>
  );
}
