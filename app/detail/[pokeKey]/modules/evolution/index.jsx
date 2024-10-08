import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchChain } from '@/app/api/chain';
import Header from '../../components/header';
import Chain from './components/chain';
import EvolutionAreas from './components/areas';
import { headerKeys } from '../../data/header';

export default async function PokeEvolution({ pokeKey }) {
  const { types, chainIndex } = await fetchPokeKey(pokeKey);
  const chainData = await fetchChain(chainIndex);
  const type = types[0];

  if (!chainData) {
    return null;
  }

  const headerKey = headerKeys.evolution;

  return (
    <div>
      <Header
        type={type}
        headerKey={headerKey}
      />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <Chain chainObj={chainData} />
        <EvolutionAreas chainIndex={chainIndex} type={type} />
      </div>
    </div>
  );
}
