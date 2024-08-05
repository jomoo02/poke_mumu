import React, { Suspense } from 'react';
import { fetchSurroundingPokes, fetchPokeKey } from '@/app/api/data';
import NavButton from './nav-button';
import NavigationSkeleton from './skeleton';

async function Navigation({ pokeKey }) {
  const basicInfo = await fetchPokeKey(pokeKey);

  const { order, types } = basicInfo;
  const type = types[0];
  const { before, next } = await fetchSurroundingPokes(order);

  return (
    <div className="grid gap-y-3 md:flex-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 lg:gap-x-20 xl:gap-x-0">
      {before && <NavButton pokeKey={before.pokeKey} direction="before" info={before} type={type} /> }
      <div className="md:col-start-2 xl:col-span-1 lg:col-start-3 xl:col-start-4">
        {next && <NavButton pokeKey={next.pokeKey} direction="next" info={next} type={type} /> }
      </div>
    </div>
  );
}

export default function PokeNavigation({ pokeKey }) {
  return (
    <div>
      <Suspense fallback={<NavigationSkeleton pokeKey={pokeKey} />}>
        <Navigation pokeKey={pokeKey} />
      </Suspense>
    </div>
  );
}
