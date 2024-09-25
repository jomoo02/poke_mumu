import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchDetail } from '@/app/api/detail';
import Abilities from './components/abilities';
import Header from '../../components/header';
import { headerKeys } from '../../data/header';

export default async function PokeAbilities({ pokeKey }) {
  const [{ types }, { abilities }] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  if (!abilities || abilities.length === 0) {
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
        <Abilities abilities={abilities} />
      </div>
    </div>
  );
}
