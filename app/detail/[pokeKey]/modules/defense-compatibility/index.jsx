import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import Header from '../../components/header';
import DefenseCompatibility from './components/defense-compatibility';
import { headerKeys } from '../../data/header';

export default async function PokeDefenseCompatibility({ pokeKey }) {
  const { types } = await fetchPokeKey(pokeKey);

  if (!types || types.length === 0) {
    return null;
  }

  const mainType = types[0];

  const headerKey = headerKeys.defenseCompatibility;

  return (
    <div>
      <Header
        type={mainType}
        headerKey={headerKey}
      />
      <DefenseCompatibility pokeTypes={types} />
    </div>
  );
}
