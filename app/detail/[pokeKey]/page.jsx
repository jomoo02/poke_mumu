import React from 'react';
import BasicInfo from '@/app/ui/detail/basic-info';
import Abilities from '@/app/ui/detail/abilities';
import DefenseCompatibility from '@/app/ui/detail/defense-compatibility';
import Stats from '@/app/ui/detail/stats/stats';
import Moves from '@/app/ui/detail/moves/moves';
import Chain from '@/app/ui/detail/chain/chain';
import Forms from '@/app/ui/detail/forms';
import { fetchChain } from '@/app/api/chain';
import { fetchPokeKey } from '@/app/api/data';
import PokeNavigation from '@/app/ui/detail/poke-router/poke-navigation';
import fetchDetail from '@/app/api/detail';

export default async function DetailPage({ params }) {
  const pokeKey = params?.pokeKey;

  const basicInfo = await fetchPokeKey(pokeKey);

  const { types, order, chainIndex } = basicInfo;

  const mainType = types[0];

  const {
    abilities,
    stats,
    moves,
    forms,
    speciesName,
  } = await fetchDetail(pokeKey);

  const chainData = await fetchChain(chainIndex);

  return (
    <div className="grid gap-y-10">
      <PokeNavigation order={order} type={mainType} />
      <BasicInfo basicInfo={basicInfo} />
      <Abilities abilities={abilities} type={mainType} />
      <Forms forms={forms} name={speciesName} type={mainType} />
      <DefenseCompatibility types={types} />
      <Chain chainData={chainData} type={mainType} />
      <Stats base={stats.baseStats} effort={stats.effortStats} type={mainType} />
      <Moves moves={moves} type={mainType} />
    </div>
  );
}
