import React from 'react';
import { fetchPokeKey } from '../../api/poke';
import { fetchDetail } from '../../api/detail';
import Ability from './components/ability';
import Header from '../../components/header';
import { headerKeys } from '../../data/header';

interface PokeAbilitiesProps {
  pokeKey: string;
}

export default async function PokeAbilities({ pokeKey }: PokeAbilitiesProps) {
  const [poke, detail] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  if (!poke || !detail) {
    return null;
  }

  const { abilities } = detail;

  if (!abilities || abilities.length === 0) {
    return null;
  }

  const { types } = poke;

  if (!types || types.length === 0) {
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
          <Ability
            key={ability.name.en}
            ability={ability}
          />
        ))}
      </div>
    </div>
  );
}
