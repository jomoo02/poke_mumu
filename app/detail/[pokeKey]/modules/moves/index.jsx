import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchDetail } from '@/app/api/detail';
import Moves from './components/moves';
import Header from '../../components/header';
import { headerKeys } from '../../data/header';

export default async function PokeMoves({ pokeKey }) {
  const [{ types }, { moves }] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  if (!moves || moves.length === 0) {
    return null;
  }

  const type = types[0];

  const headerKey = headerKeys.moves;

  return (
    <div className="overflow-hidden">
      <Header
        type={type}
        headerKey={headerKey}
      />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <Moves moves={moves} type={type} />
      </div>
    </div>
  );
}
