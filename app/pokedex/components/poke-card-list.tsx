'use client';

import React, { useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import PokeCard from './poke-card';
import ListHeader from './list-header';
import usePokeCardList from '../hooks/usePokeCardList';
import type { PokeItem } from '../types/poke';

interface PokeCardListProps {
  pokes: PokeItem[];
}

function Ske() {
  return (
    <div className="w-pokedex h-16 bg-slate-50 border-b animate-pulse" />
  );
}

export default function PokeCardList({ pokes }: PokeCardListProps) {
  const momoedPokes = useMemo(() => pokes, []);

  const { isLoading } = usePokeCardList();

  const itemContent = (index: number, poke: PokeItem) => (
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
