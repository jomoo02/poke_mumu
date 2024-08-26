import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchChain } from '@/app/api/chain';
import Header from '../header';
import Chain from './chain';
import EvolutionInfo from './evolution-info';

async function Evolution({ pokeKey }) {
  const { types, chainIndex } = await fetchPokeKey(pokeKey);
  const chainData = await fetchChain(chainIndex);
  const type = types[0];

  if (!chainData) {
    return null;
  }

  const { chain, maxWidth, maxDepth } = chainData;

  return (
    <div>
      {chainIndex}
      <Header type={type} category="chain" />
      <Chain chain={chain} type={type} maxWidth={maxWidth} maxDepth={maxDepth} />
      <EvolutionInfo chainIndex={chainIndex} />
    </div>
  );
}

export default function PokeEvolution({ pokeKey }) {
  return (
    <Evolution pokeKey={pokeKey} />
  );
}
