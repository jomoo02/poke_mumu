import React from 'react';
import Link from 'next/link';
import { fetchSurroundingPokes } from '@/app/api/data';
import ArrowRightIcon from '../../icons/arrow-right';
import ArrowLeftIcon from '../../icons/arrow-left';
import PokeInfo from './poke-info';

function RouteButton({
  pokeKey, direction, info, type,
}) {
  const directionIcon = {
    before: {
      IconComponent: ArrowLeftIcon,
      flexDirection: 'flex-row',
      iconClassName: 'border-r',
    },
    next: {
      IconComponent: ArrowRightIcon,
      flexDirection: 'flex-row-reverse',
      iconClassName: 'border-l',
    },
  };

  const { IconComponent, flexDirection, iconClassName } = directionIcon[direction];

  return (
    <Link
      href={`/detail/${pokeKey}`}
      className={`flex border-2 ${type}-border rounded-lg items-center h-full ${flexDirection}`}
    >
      <div className={`${iconClassName} h-full flex items-center justify-center px-4`}>
        <IconComponent />
      </div>
      <div className="flex-1">
        <PokeInfo info={info} />
      </div>
    </Link>
  );
}

export default async function PokeNavigation({ order, type }) {
  const { before, next } = await fetchSurroundingPokes(order);
  return (
    <div className="grid gap-y-4 md:flex-row md:grid-cols-2 xl:grid-cols-3 gap-x-12 lg:gap-x-20 xl:gap-x-0">
      <div>
        {before && <RouteButton pokeKey={before.pokeKey} direction="before" info={before} type={type} /> }
      </div>
      <div className="md:col-start-2 xl:col-span-1 xl:col-start-3">
        {next && <RouteButton pokeKey={next.pokeKey} direction="next" info={next} type={type} /> }
      </div>
    </div>
  );
}
