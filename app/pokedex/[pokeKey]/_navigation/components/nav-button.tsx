import React from 'react';
import type { Poke } from '@/app/models/PokeV2';
import type { Type } from '@/app/data/pokeType';
import Link from 'next/link';
import ArrowRightIcon from '@/app/components/icons/arrow-right';
import ArrowLeftIcon from '@/app/components/icons/arrow-left';
import ButtonInfo from './button-info';

interface NavButtonProps {
  type: Type,
  poke: Poke,
}

function Before({
  type,
  poke,
}: NavButtonProps) {
  const { pokeKey } = poke;

  return (
    <Link
      href={`/pokedex/${pokeKey}`}
      className={`flex border-2 ${type}-border rounded-lg items-center h-14 md:h-16`}
      prefetch
    >
      <div className="flex justify-center items-center h-full border-r px-4">
        <ArrowLeftIcon />
      </div>
      <div className="flex-1">
        <ButtonInfo poke={poke} />
      </div>
    </Link>
  );
}

function Next({
  type,
  poke,
}: NavButtonProps) {
  const { pokeKey } = poke;

  return (
    <Link
      href={`/pokedex/${pokeKey}`}
      className={`flex flex-row-reverse border-2 ${type}-border rounded-lg items-center h-14 md:h-16`}
      prefetch
    >
      <div className="flex justify-center items-center h-full border-l px-4">
        <ArrowRightIcon />
      </div>
      <div className="flex-1">
        <ButtonInfo poke={poke} />
      </div>
    </Link>
  );
}

const NavButton = {
  Before,
  Next,
};

export default NavButton;
