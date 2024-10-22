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

function CardListHeader() {
  return (
    <div className="sticky flex h-10 items-stretch top-14 bg-slate-200 divide-white z-50 divide-x w-[360px] sm:w-[420px] md:w-[520px] xl:w-[1100px] font-semibold text-slate-700">
      <div className="w-[4.5rem] flex items-center px-2">
        #
      </div>
      <div className="min-w-[210px] sm:w-[258px] flex items-center px-2">
        name
      </div>
      <div className="w-24 flex items-center px-2">
        type
      </div>
      <div className="divide-x items-center hidden md:flex">
        <div className="w-20 sm:w-24 px-3">
          total
        </div>
        <div className="w-20 sm:w-24 px-3 hidden xl:block">
          hp
        </div>
        <div className="w-20 sm:w-24 px-3 hidden xl:block">
          attack
        </div>
        <div className="w-20 sm:w-24 px-3 hidden xl:block">
          defense
        </div>
        <div className="w-20 sm:w-24 px-3 hidden xl:block">
          sp.atk
        </div>
        <div className="w-20 sm:w-24 px-3 hidden xl:block">
          sp.def
        </div>
        <div className="w-20 sm:w-24 px-3 hidden xl:block">
          speed
        </div>
      </div>

    </div>
  );
}

export default function PokeCardList({ pokes }: PokeCardListProps) {
  const momoedPokes = useMemo(() => pokes, []);

  return (
    <div className="flex flex-col items-center">
      <CardListHeader />
      <Virtuoso
        useWindowScroll
        data={momoedPokes}
        totalCount={momoedPokes.length}
        itemContent={itemContent}
        className="w-[360px] sm:w-[420px] md:w-[520px] xl:w-[1100px]"
      />
    </div>
  );
}
