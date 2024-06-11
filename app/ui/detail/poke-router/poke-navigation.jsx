import React from 'react';
import Link from 'next/link';
import { fetchSurroundingPokes } from '@/app/api/data';
import ArrowRightIcon from '../../icons/arrow-right';
import ArrowLeftIcon from '../../icons/arrow-left';
import PokeInfo from './poke-info';

function RouteButton({ pokeKey, direction, info }) {
  const directionIcon = {
    before: {
      IconComponent: ArrowLeftIcon,
      className: '',
    },
    next: {
      IconComponent: ArrowRightIcon,
      className: 'flex-row-reverse',
    },
  };

  const { IconComponent, className } = directionIcon[direction];

  return (
    <Link
      href={`/${pokeKey}`}
      className={`flex ${className} items-center gap-x-3 min-h-10`}
    >
      <IconComponent />
      <PokeInfo info={info} />
    </Link>
  );
}

export default async function PokeNavigation({ order }) {
  const { before, next } = await fetchSurroundingPokes(order);
  return (
    <div className="md:flex justify-between items-center">
      <div>{before && <RouteButton pokeKey={before.pokeKey} direction="before" info={before} /> }</div>
      <div>{next && <RouteButton pokeKey={next.pokeKey} direction="next" info={next} /> }</div>
    </div>
  );
}
