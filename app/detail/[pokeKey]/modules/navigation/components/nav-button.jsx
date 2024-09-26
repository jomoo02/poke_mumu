import React from 'react';
import Link from 'next/link';
import ArrowRightIcon from '@/app/components/icons/arrow-right';
import ArrowLeftIcon from '@/app/components/icons/arrow-left';
import NavButtonInfo from './nav-button-info';

function Before({
  type,
  pokeInfo,
}) {
  const { pokeKey, ...info } = pokeInfo;

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
        <NavButtonInfo pokeInfo={info} />
      </div>
    </Link>
  );
}

function Next({
  type,
  pokeInfo,
}) {
  const { pokeKey, ...info } = pokeInfo;

  return (
    <Link
      href={`/detail/${pokeKey}`}
      className={`flex flex-row-reverse border-2 ${type}-border rounded-lg items-center h-14 md:h-16`}
    >
      <div className="flex justify-center items-center h-full border-l px-4">
        <ArrowRightIcon />
      </div>
      <div className="flex-1">
        <NavButtonInfo pokeInfo={info} />
      </div>
    </Link>
  );
}

const NavButton = {
  Before,
  Next,
};

export default NavButton;
