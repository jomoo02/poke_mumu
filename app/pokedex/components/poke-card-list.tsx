'use client';

import React, { useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import PokeCard from './poke-card';
import type { PokeItem } from '../types/poke';

interface PokeCardListProps {
  pokes: PokeItem[];
}

const itemContent = (index: number, poke: PokeItem) => (
  <div className={index === 0 ? 'border-y' : 'border-b'}>
    <PokeCard poke={poke} />
  </div>
);

export default function PokeCardList({ pokes }: PokeCardListProps) {
  const momoedPokes = useMemo(() => pokes, []);

  return (
    <div className="overflow-x-auto">
      <Virtuoso
        useWindowScroll
        data={momoedPokes}
        totalCount={momoedPokes.length}
        itemContent={itemContent}
        className="w-[1200px]"
      />
    </div>
  );
}
