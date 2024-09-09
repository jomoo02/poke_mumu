import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchDetail } from '@/app/api/detail';
import Moves from './components/moves';
import Header from '../../components/header';

export default async function PokeMoves({ pokeKey }) {
  const [{ types }, { moves }] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  const type = types[0];

  const headerTexts = {
    ko: '기술',
    en: 'move',
  };

  if (!moves || moves.length === 0) {
    return null;
  }

  return (
    <div className="overflow-hidden">
      <Header
        type={type}
        headerTexts={headerTexts}
      />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <Moves moves={moves} type={type} />
      </div>
    </div>
  );
}
