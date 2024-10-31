import React from 'react';
import {
  getPoke,
  getSurroundingPokes,
} from '../utils/get';
import NavButton from './components/nav-button';

interface PokeNavigationProps {
  pokeKey: string;
}

export default async function PokeNavigation({
  pokeKey,
}: PokeNavigationProps) {
  const poke = await getPoke(pokeKey);

  if (!poke) {
    return null;
  }

  const { types, order } = poke;

  const type = types[0];

  const { before, next } = await getSurroundingPokes(order);

  return (
    <nav className="grid gap-y-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 lg:gap-x-20 xl:gap-x-0">
      {before && (
        <NavButton.Before
          poke={before}
          type={type}
        />
      )}
      <div className="lg:col-start-2 xl:col-start-3">
        {next && (
          <NavButton.Next
            poke={next}
            type={type}
          />
        )}
      </div>
    </nav>
  );
}
