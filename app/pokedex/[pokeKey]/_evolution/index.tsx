import React from 'react';
import {
  getPoke,
  getPokeDetail,
  getChain,
} from '../utils/get';
import Header from '../components/header';
import PokeChain from './components/chain';
import Areas from './components/areas';
import { headerKeys } from '../data/header';

interface PokeEvolutionProps {
  pokeKey: string;
}

export default async function PokeEvolution({
  pokeKey,
}: PokeEvolutionProps) {
  const [poke, pokeDetail] = await Promise.all([
    getPoke(pokeKey),
    getPokeDetail(pokeKey),
  ]);

  if (!poke || !pokeDetail) {
    return null;
  }

  const { types } = poke;
  const type = types[0];

  const { chainIndex } = pokeDetail;

  const pokeEvolutionChain = await getChain(chainIndex);

  if (!pokeEvolutionChain) {
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
        <PokeChain chainObj={pokeEvolutionChain} />
        <Areas chainIndex={chainIndex} type={type} />
      </div>
    </div>
  );
}
