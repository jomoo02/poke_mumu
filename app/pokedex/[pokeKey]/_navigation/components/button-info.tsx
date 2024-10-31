'use client';

import React from 'react';
import Image from 'next/image';
import type { Poke } from '@/app/models/PokeV2';
import usePokeIdentifiers from '../../hooks/usePokeIdentifiers';

interface ButtonInfoProps {
  poke: Poke;
}

export default function ButtonInfo({
  poke,
}: ButtonInfoProps) {
  const {
    name,
    form,
  } = usePokeIdentifiers(poke);

  const {
    no,
    sprite
  } = poke;

  const src = `https://raw.githubusercontent.com/jomoo02/poke_sprites/refs/heads/main/home/${sprite}.png`;

  return (
    <div className="flex justify-center gap-x-3">
      <div className="w-9 h-9 relative">
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
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-center text-sm py-1 font-semibold">
        <div className="flex gap-x-1.5 items-center">
          <span className="capitalize text-slate-500 text-sm">
            {`#${no}`}
          </span>
          <span className="text-center text-slate-600/90 text-[15px]">
            {name}
          </span>
        </div>
        {form && (
          <span className="text-slate-600 text-xs leading-3">
            {form}
          </span>
        )}
      </div>
    </div>
  );
}
