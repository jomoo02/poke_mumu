import React, { Suspense } from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchChain } from '@/app/api/chain';
import Header from '../header';
import Chain from './chain';
import EvolutionAreas from './evolution-areas';
// import EvolutionAreas from '../../modules/evolution/components/areas';
import EvolutionSkeleton from './skeleton';

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
      {/* <Header type={type} category="chain" /> */}
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <Chain chain={chain} maxWidth={maxWidth} maxDepth={maxDepth} />
        <EvolutionAreas chainIndex={chainIndex} type={type} />
      </div>
    </div>
  );
}

export default function PokeEvolution({ pokeKey }) {
  return (
    <Suspense fallback={<EvolutionSkeleton />}>
      <Evolution pokeKey={pokeKey} />
    </Suspense>
  );
}
