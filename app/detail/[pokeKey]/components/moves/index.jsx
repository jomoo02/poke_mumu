import React, { Suspense } from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchPokeDetail } from '@/app/api/detail';
import Header from '../header';

async function Moves({ pokeKey }) {
  const [{ types, moves }] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchPokeDetail(pokeKey),
  ]);

  const type = types[0];

  return (
    <div className="overflow-hidden">
      <Header type={type} category="moves" />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        
      </div>
    </div>
  )
}

export default function PokeMoves({ pokeKey }) {
  return (
    <Suspense>
      <Moves pokeKey={pokeKey} />
    </Suspense>
  )
}