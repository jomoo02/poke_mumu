import React, { Suspense } from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchDetail } from '@/app/api/detail';
import Header from '../header';
import GenMoves from './gen-moves';
import MovesSkeleton from './skeleton';

async function Moves({ pokeKey }) {
  const [{ types }, { moves }] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  const type = types[0];

  return (
    <div className="overflow-hidden">
      {/* <Header type={type} category="moves" /> */}
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <GenMoves moves={moves} type={type} />
      </div>
    </div>
  );
}

export default function PokeMoves({ pokeKey }) {
  return (
    <Suspense fallback={<MovesSkeleton />}>
      <Moves pokeKey={pokeKey} />
    </Suspense>
  );
}
