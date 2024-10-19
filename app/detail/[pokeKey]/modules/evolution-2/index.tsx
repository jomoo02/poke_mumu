import React from 'react';
import { fetchPokeKey } from '../../api/poke';
import { fetchChain } from '../../api/chain';
import Header from '../../components/header';
import Chain from './components/chain';
import EvolutionAreas from './components/areas';
import { headerKeys } from '../../data/header';

interface PokeEvolutionProps {
  pokeKey: string;
}

export default async function PokeEvolution({ pokeKey }: PokeEvolutionProps) {
  const poke = await fetchPokeKey(pokeKey);

  if (!poke) {
    return null;
  }
  const { types, chainIndex } = poke;

  if (!types || !chainIndex) {
    return null;
  }

  const type = types[0];

  const chainData = await fetchChain(chainIndex);

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
