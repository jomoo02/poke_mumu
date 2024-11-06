import React from 'react';
import { Poke } from '@/app/models/poke.type';
import { PokeDetail } from '@/app/models/detail.type';
import { getPoke, getPokeDetail } from '../utils/get';
import MoveList from './components/moves';
import Header from '../components/header';
import { headerKeys } from '../data/header';

interface PokeMovesProps {
  pokeKey: string;
}

export default async function PokeMoves({
  pokeKey,
}: PokeMovesProps) {
  const [poke, pokeDetail]: [Poke, PokeDetail] = await Promise.all([
    getPoke(pokeKey),
    getPokeDetail(pokeKey),
  ]);

  if (!poke || !pokeDetail) {
    return null;
  }

  const { moves } = pokeDetail;

  if (moves.length === 0) {
    return null;
  }

  const type = poke.types[0];

  const headerKey = headerKeys.moves;

  return (
    <div className="overflow-hidden">
      <Header
        type={type}
        headerKey={headerKey}
      />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <MoveList moves={moves} type={type} />
      </div>
    </div>
  );
}
