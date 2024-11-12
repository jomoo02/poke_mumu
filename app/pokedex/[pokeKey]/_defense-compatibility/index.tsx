import React from 'react';
import { getPoke } from '../utils/get';
import Header from '../components/header';
import DefenseCompatibility from './components/defense-compatiblity';
import { headerKeys } from '../data/header';

interface PokeDefenseCompatibilityProps {
  pokeKey: string;
}

export default async function PokeDefenseCompatibility({
  pokeKey,
}: PokeDefenseCompatibilityProps) {
  const poke = await getPoke(pokeKey);

  if (!poke) {
    return null;
  }

  const { types } = poke;

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
