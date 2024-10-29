import React from 'react';
import {
  getPoke,
  getPokeDetail,
} from '../utils/get';
import { headerKeys } from '../data/header';
import Header from '../components/header';
import PokeAbility from './components/ability';

interface PokeAbilitiesProps {
  pokeKey: string;
}

export default async function PokeAbilities({ pokeKey }: PokeAbilitiesProps) {
  const [poke, detail] = await Promise.all([
    getPoke(pokeKey),
    getPokeDetail(pokeKey),
  ]);

  if (!poke || !detail) {
    return null;
  }

  const { types } = poke;

  const { abilities } = detail;

  if (abilities.length === 0) {
    return null;
  }

  const type = types[0];

  const headerKey = headerKeys.abilities;

  return (
    <div>
      <Header
        type={type}
        headerKey={headerKey}
      />
      <div className={`grid divide-y border-2 border-t-0 ${type}-border rounded-b-sm`}>
        {abilities.map((ability) => (
          <PokeAbility
            key={ability.name.en}
            ability={ability}
          />
        ))}
      </div>
    </div>
  );
}
