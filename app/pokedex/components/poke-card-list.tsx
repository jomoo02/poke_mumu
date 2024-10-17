'use client';

import React from 'react';
import PokeCard from './poke-card';
import type { PokeItem } from '../types/poke';

interface PokeCardListProps {
  pokes: PokeItem[];
}

export default function PokeCardList({ pokes }: PokeCardListProps) {
  return (
    <div className="grid divide-y-2 overflow-x-auto">
      {pokes.map((p) => <PokeCard key={p.order} poke={p} />)}
    </div>
  );
}
