import React from 'react';
import Link from 'next/link';
import ArrowRightIcon from '@/app/components/icons/arrow-right';
import ArrowLeftIcon from '@/app/components/icons/arrow-left';
import { PokeTypeType } from '@/app/types/pokeType.type';
import NavButtonInfo from './nav-button-info';
import { PokeDataType } from '../../../types/pokeData.type';

function Before({
  type,
  pokeInfo,
}: {
  type: PokeTypeType,
  pokeInfo: PokeDataType,
}) {
  const { pokeKey } = pokeInfo;

  return (
    <Link
      href={`/detail/${pokeKey}`}
      className={`flex border-2 ${type}-border rounded-lg items-center h-14 md:h-16`}
      prefetch
    >
      <div className="flex justify-center items-center h-full border-r px-4">
        <ArrowLeftIcon />
      </div>
      <div className="flex-1">
        <NavButtonInfo pokeInfo={pokeInfo} />
      </div>
    </Link>
  );
}

function Next({
  type,
  pokeInfo,
}: {
  type: PokeTypeType,
  pokeInfo: PokeDataType,
}) {
  const { pokeKey } = pokeInfo;

  return (
    <Link
      href={`/detail/${pokeKey}`}
      className={`flex flex-row-reverse border-2 ${type}-border rounded-lg items-center h-14 md:h-16`}
    >
      <div className="flex justify-center items-center h-full border-l px-4">
        <ArrowRightIcon />
      </div>
      <div className="flex-1">
        <NavButtonInfo pokeInfo={pokeInfo} />
      </div>
    </Link>
  );
}

const NavButton = {
  Before,
  Next,
};

export default NavButton;
