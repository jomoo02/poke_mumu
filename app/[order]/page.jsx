import React from 'react';
import BasicInfo from '@/app/ui/detail/basic-info';
import Abilities from '@/app/ui/detail/ability';
import Types from '@/app/ui/detail/type';
import Stats from '@/app/ui/detail/stat';
import Moves from '@/app/ui/detail/moves';
import Chain from '@/app/ui/detail/chain';
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
    speciesId,
  } = await fetchDetail(id);

  const chainData = await fetchChain(chainIndex);

  return (
    <div className="grid gap-y-10">
      <RouteButton order={order} />
      <BasicInfo no={no} name={name} sprity={sprity} id={speciesId} order={order} form={form} />
      <Forms forms={forms} name={speciesName} />
      <Abilities abilities={abilities} />
      <Types types={types} />
      {chainData && chainData.chain.map(({
        name: cName, to, detail, id: cId,
      }) => (
        <Chain
          key={`${cName}-${cId}-${to[0]?.name}`}
          name={cName}
          to={to}
          detail={detail}
          id={cId}
        />
      ))}
      <Stats base={stats.baseStats} effort={stats.effortStats} type={types[0]} />
      <Moves moves={moves} />
    </div>
  );
}
