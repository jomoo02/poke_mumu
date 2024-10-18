'use client';

import React, { useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import PokeCard from './poke-card';
import type { PokeItem } from '../types/poke';


interface PokeCardListProps {
  pokes: PokeItem[];
}

export default function PokeCardList({ pokes }: PokeCardListProps) {
  const momoedPokes = useMemo(() => pokes, []);

  return (
    // <div className="grid divide-y-2 overflow-x-auto">
    //   {pokes.map((p) => <PokeCard key={p.order} poke={p} />)}
    // </div>
    <div className="overflow-x-ato">
      <Virtuoso
        useWindowScroll
        data={momoedPokes}
        itemContent={(_ , poke) => (
          // <div className="grid justify-center">
            <PokeCard poke={poke} />
          // </div>
        )}
      />
    </div>

  );
}
