'use client';

import React, { useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import type { CardPoke } from '@/app/models/PokeV2';
import PokeCard from './poke-card';
import ListHeader from './list-header';
import usePokeCardList from '../hooks/usePokeCardList';

interface PokeCardListProps {
  pokes: CardPoke[];
}

function Ske() {
  return (
    <div className="w-pokedex h-16 bg-slate-50 border-b animate-pulse" />
  );
}

export default function PokeCardList({ pokes }: PokeCardListProps) {
  const momoedPokes = useMemo(() => pokes, []);

  const { isLoading } = usePokeCardList();

  const itemContent = (index: number, poke: CardPoke) => (
    <div className="border-b">
      {isLoading ? <Ske /> : <PokeCard poke={poke} />}
    </div>
  );

  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <ListHeader />
      <Virtuoso
        useWindowScroll
        data={momoedPokes}
        totalCount={momoedPokes.length}
        itemContent={itemContent}
        className="w-pokedex"
      />
    </div>
  );
}
