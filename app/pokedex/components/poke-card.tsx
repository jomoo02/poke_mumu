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
      <div className="w-card-stat font-bold text-slate-800 flex justify-end">{total}</div>
      {stats.map(({ stat, value }) => (
        <div key={stat} className="w-card-stat font-semibold text-slate-700/90 hidden lg:flex justify-end">
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
    <div className="flex items-stretch h-16 hover:bg-blue-100">
      <div className="w-card-number flex items-center text-[13px] xl:text-sm text-slate-600 font-semibold">
        {`#${no}`}
      </div>
      <div className="w-card-name flex">
        <div className="flex items-center px-2">
          <div className="w-card-img">
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
        <div className="grid grow items-center px-2 xl:px-3">
          <div>
            <Link
              href={`/detail/${pokeKey}`}
              className="font-bold text-blue-800 leading-4 text-[15px] xl:text-base"
              onClick={handlePokeCardClick}
            >
              {name}
            </Link>
            {form && (
              <div className="text-xs lg:text-sm leading-4 font-semibold text-slate-500/90 capitalize">
                {form}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-card-type flex flex-col gap-y-1 items-center justify-center">
        {types.map((type) => (
          <div key={type}>
            <PokeType type={type} />
          </div>
        ))}
      </div>
      <div className="text-sm hidden md:flex items-center">
        <PokeCardStats stats={stats} />
      </div>
    </div>
  );
}
