'use client';

import React from 'react';
import usePokeIdentifiers from '../../../hooks/usePokeIdentifiers';

export default function NavButtonInfo({ pokeInfo }) {
  const {
    no,
    name,
    form,
  } = usePokeIdentifiers(pokeInfo);

  return (
    <div className="flex flex-col justify-center items-center text-sm py-1 font-semibold">
      <div className="flex gap-x-2 items-center">
        <span className="capitalize text-slate-500 text-sm">
          {no}
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
  );
}
