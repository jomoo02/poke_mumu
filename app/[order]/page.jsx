import React from 'react';
import BasicInfo from '@/app/ui/detail/basic-info';
import Abilities from '@/app/ui/detail/ability';
import Types from '@/app/ui/detail/type';
import Stats from '@/app/ui/detail/stat';
import Moves from '@/app/ui/detail/moves';
// import Chain from '@/app/ui/detail/chain';
import Chain from '@/app/ui/detail/chain-v2';
import Forms from '@/app/ui/detail/forms';
import { fetchChain } from '@/app/api/chain';
import { fetchPoke } from '@/app/api/data';
import RouteButton from '@/app/ui/detail/route-button';
import fetchDetail from '@/app/api/detail';

export default async function DetailPage({ params }) {
  const order = params?.order;

  const {
    no, name, sprity, types, id, form,
  } = await fetchPoke(order);

  const {
    abilities,
    stats,
    moves,
    forms,
    speciesName,
    chainIndex,
  } = await fetchDetail(id);

  const { chain } = await fetchChain(chainIndex);

  return (
    <div className="grid gap-y-10">
      <RouteButton order={order} />
      <BasicInfo no={no} name={name} sprity={sprity} id={id} order={order} form={form} />
      <Forms forms={forms} name={speciesName} />
      <Abilities abilities={abilities} />
      <Types types={types} />
      <Chain chain={chain} />
      <Stats base={stats.baseStats} effort={stats.effortStats} type={types[0]} />
      <Moves moves={moves} />
    </div>
  );
}
