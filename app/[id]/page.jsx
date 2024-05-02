import React from 'react';
import fetchPokeDetail from '@/app/api/detail';
import BasicInfo from '@/app/ui/detail/basic-info';
import Abilities from '@/app/ui/detail/ability';
import Types from '@/app/ui/detail/type';
import Stats from '@/app/ui/detail/stat';
import Moves from '@/app/ui/detail/moves';
import Chain from '@/app/ui/detail/chain';
import Forms from '@/app/ui/detail/forms';
import { fetchAllChainIds, fetchChain } from '@/app/api/chain';
import { fetchPoke } from '@/app/api/data';
import checkBackEvolutionMoves from '@/app/api/detail/chainMoves';

export default async function DetailPage({ params }) {
  const id = params?.id;

  const {
    no, name, sprity, types,
  } = await fetchPoke(id);

  const {
    abilities, stats, moves, forms, speciesId,
  } = await fetchPokeDetail(id);

  const allIds = await fetchAllChainIds();
  const targetChainIndex = allIds.find(({ ids }) => ids.includes(String(speciesId)))?.chainIndex;
  const chainData = await fetchChain(targetChainIndex);

  let test = moves;

  if (chainData) {
    test = await checkBackEvolutionMoves(id, chainData.chain, moves);
  }

  return (
    <div className="grid gap-y-10">
      <BasicInfo no={no} name={name} sprity={sprity} id={speciesId} />
      <Forms forms={forms} />
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
      <Moves moves={test} />
    </div>
  );
}
