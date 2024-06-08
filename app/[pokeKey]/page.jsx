import React from 'react';
import BasicInfo from '@/app/ui/detail/basic-info';
import Abilities from '@/app/ui/detail/abilities';
import DefenseCompatibility from '@/app/ui/detail/defense-compatibility';
import Stats from '@/app/ui/detail/stats/stats';
import Moves from '@/app/ui/detail/moves';
import Chain from '@/app/ui/detail/chain/chain';
import Forms from '@/app/ui/detail/forms';
import { fetchChain } from '@/app/api/chain';
import { fetchPokeKey } from '@/app/api/data';
import PokeNavigation from '@/app/ui/detail/poke-navigation';
import fetchDetail from '@/app/api/detail';

export default async function DetailPage({ params }) {
  const pokeKey = params?.pokeKey;

  const {
    no, name, sprity, types, id, form, order,
  } = await fetchPokeKey(pokeKey);

  const mainType = types[0];

  const {
    abilities,
    stats,
    moves,
    forms,
    speciesName,
    chainIndex,
  } = await fetchDetail(id);

  const chainData = await fetchChain(chainIndex);

  return (
    <div className="grid gap-y-10 lg:mx-10 xl:mx-20 2xl:mx-56 containe">
      <PokeNavigation order={order} />
      {/* {name.ko} */}
      <BasicInfo no={no} name={name} sprity={sprity} order={order} form={form} types={types} />
      <Forms forms={forms} name={speciesName} type={mainType} />
      <Abilities abilities={abilities} type={mainType} />
      <DefenseCompatibility types={types} />
      <Chain chainData={chainData} type={mainType} />
      <Stats base={stats.baseStats} effort={stats.effortStats} type={mainType} />
      <Moves moves={moves} />
    </div>
  );
}
