'use client';

import React from 'react';
import type { Poke } from '@/app/models/PokeV2';
import usePokeIdentifiers from '../../hooks/usePokeIdentifiers';

interface PokeIdentifiersProps {
  poke: Poke;
}

export default function PokeIdentifiers({
  poke,
}: PokeIdentifiersProps) {
  const {
    no,
    name,
    form,
  } = usePokeIdentifiers(poke);

  return (
    <h2 className="mb-2 sm:mb-4 font-semibold">
      <span className="text-lg sm:text-xl text-slate-500 capitalize">
        {no}
      </span>
      <span className="ml-1.5 sm:ml-2 mr-[3px] sm:mr-1 text-lg sm:text-xl text-slate-600/90 font-bold">
        {name}
      </span>
      {form && (
        <span className="text-xs sm:text-base text-slate-600/90">
          {form}
        </span>
      )}
    </h2>
  );
}
