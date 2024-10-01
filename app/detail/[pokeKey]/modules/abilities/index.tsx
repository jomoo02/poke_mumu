import React from 'react';
import { fetchPokeKey } from '@/app/api/poke';
import { fetchDetail } from '@/app/api/detail';
import Abilities from './components/abilities';
import Header from '../../components/header';
import { headerKeys } from '../../data/header';
import { AbilitiesType } from '../../types/abilities.type';

type PokeAbilitiesProps = {
  pokeKey: string,
};

export default async function PokeAbilities({ pokeKey }: PokeAbilitiesProps) {
  const [poke, detail] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  if (!poke || !detail) {
    return null;
  }

  const { abilities } = detail;
  const { types } = poke;

  if (!abilities || abilities.length === 0) {
    return null;
  }

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
        <Abilities abilities={abilities as AbilitiesType} />
      </div>
    </div>
  );
}
