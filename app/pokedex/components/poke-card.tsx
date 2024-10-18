'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PokeType from '@/app/components/poke-type';
import usePokeCard from '../hooks/usePokeCard';
import type { PokeItem, Stats } from '../types/poke';

interface PokeCardStatsProps {
  stats: Stats[],
}

interface PokeCardProps {
  poke: PokeItem;
}

function PokeCardStats({ stats }: PokeCardStatsProps) {
  const total = stats.reduce((acc, { value }) => acc + value, 0);

  return (
    <>
      <div className="font-bold text-slate-800 w-20 sm:w-24 text-right">{total}</div>
      {stats.map(({ stat, value }) => (
        <div key={stat} className="w-20 sm:w-24 text-right font-semibold text-slate-700/90">
          {value}
        </div>
      ))}
    </>
  );
}

export default function PokeCard({ poke }: PokeCardProps) {
  const {
    sprite,
    name,
    types,
    form,
    pokeKey,
    no,
    stats,
    handlePokeCardClick,
  } = usePokeCard(poke);

  const src = `https://raw.githubusercontent.com/jomoo02/poke_sprites/refs/heads/main/home/${sprite}.png`;

  return (
    <div className="flex h-16 items-stretch gap-x-3 hover:bg-blue-100 w-full sm:w-[1200px]">
      <div id="no" className="w-[4.5rem] text-sm text-slate-600 font-semibold flex items-center px-1">
        {`#${no}`}
      </div>
      <div id="img" className="flex items-center">
        <div className="w-[58px] h-[56px] relative">
          <Image
            placeholder="blur"
            blurDataURL="/pokeball.svg"
            src={src}
            alt={name}
            fill
            sizes="48px"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <div id="name_form" className="min-w-36 sm:w-48 flex justify-center flex-col px-2">
        <Link
          href={`/detail/${pokeKey}`}
          className="text-sm sm:text-base font-bold text-blue-800"
          onClick={handlePokeCardClick}
        >
          {name}
        </Link>
        {form && (
          <div className="text-xs sm:text-sm leading-4 font-semibold text-slate-500/90 capitalize">
            {form}
          </div>
        )}
      </div>
      <div id="types" className="flex flex-col gap-y-1 items-center w-[4.5rem] justify-center">
        {types.map((type) => (
          <div key={type}>
            <PokeType type={type} />
          </div>
        ))}
      </div>
      <div id="stats" className="flex items-center gap-x-3.5 px-3.5">
        <PokeCardStats stats={stats} />
      </div>
    </div>
  );
}
