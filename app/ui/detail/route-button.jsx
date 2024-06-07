import React from 'react';
import Link from 'next/link';
import { fetchSurroundingPokes } from '@/app/api/data';
import ArrowRightIcon from '../icons/arrow-right';
import ArrowLeftIcon from '../icons/arrow-left';

function NextRouteButton({ pokeKey, direction }) {
  const directionIcon = {
    before: ArrowLeftIcon,
    next: ArrowRightIcon,
  };

  const IconComponent = directionIcon[direction];

  return (
    <Link
      href={`/${pokeKey}`}
    >
      <IconComponent />
    </Link>
  );
}

export default async function RouteButton({ order }) {
  const { before, next } = await fetchSurroundingPokes(order);
  return (
    <div className="flex justify-between">
      {before && <NextRouteButton pokeKey={before.pokeKey} direction="before" /> }
      {next && <NextRouteButton pokeKey={next.pokeKey} direction="next" /> }
    </div>
  );
}
