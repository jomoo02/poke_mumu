import React from 'react';
import { fetchPokeKey } from '../../api/poke';
import Header from '../../components/header';
import DefenseCompatibility from './components/defense-compatibility';
import { headerKeys } from '../../data/header';

interface PokeDefenseCompatibilityProps {
  pokeKey: string;
}

export default async function PokeDefenseCompatibility({ pokeKey }: PokeDefenseCompatibilityProps) {
  const poke = await fetchPokeKey(pokeKey);

  if (!poke) {
    return null;
  }

  const { types } = poke;

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
