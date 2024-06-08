import React from 'react';
import Link from 'next/link';
import { fetchSurroundingPokes } from '@/app/api/data';
import ArrowRightIcon from '../icons/arrow-right';
import ArrowLeftIcon from '../icons/arrow-left';

function RouteButton({ pokeKey, direction }) {
  const directionIcon = {
    before: ArrowLeftIcon,
    next: ArrowRightIcon,
  };

  const IconComponent = directionIcon[direction];

  return (
    <Link href={`/${pokeKey}`}>
      <IconComponent />
    </Link>
  );
}

export default async function PokeNavigation({ order }) {
  const { before, next } = await fetchSurroundingPokes(order);
  return (
    <div className="flex justify-between">
      <div>{before && <RouteButton pokeKey={before.pokeKey} direction="before" /> }</div>
      <div>{next && <RouteButton pokeKey={next.pokeKey} direction="next" /> }</div>
    </div>
  );
}
