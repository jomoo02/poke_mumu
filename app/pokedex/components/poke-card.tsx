'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PokeType from '@/app/components/poke-type';
import usePokeCard from '../hooks/usePokeCard';
import type { PokeItem } from '../types/poke';

interface PokeCardProps {
  poke: PokeItem;
}

export default function PokeCard({ poke }: PokeCardProps) {
  const {
    sprite,
    name,
    types,
    form,
    pokeKey,
    no,
    order,
    stats,
    handlePokeCardClick,
  } = usePokeCard(poke);

  const src = `https://raw.githubusercontent.com/jomoo02/poke_sprites/refs/heads/main/home/${sprite}.png`;

  return (
    <div className="flex">
      <div id="no">
        {`No.${no}`}
      </div>
      <div id="img">
        <div className="w-[48px] h-[48px] relative">
          <Image
            placeholder="blur"
            blurDataURL="/pokeball.svg"
            src={src}
            alt={name}
            fill
            sizes="80px"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <div id="name_form">
        <Link href={`detail/${pokeKey}`}>{name}</Link>
        {form}
      </div>
      <div id="types">
        {types.map((type) => <PokeType key={type} type={type} />)}
      </div>
      <div id="stats" className="flex gap-x-4">
        {stats.map(({ stat, value }) => (
          <div key={stat}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
