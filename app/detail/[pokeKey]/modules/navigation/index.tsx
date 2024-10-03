import React from 'react';
import { fetchSurroundingPokes, fetchPokeKey } from '../../api/poke';
import NavButton from './components/nav-button';

export default async function PokeNavigaition({ pokeKey }: { pokeKey: string }) {
  const poke = await fetchPokeKey(pokeKey);

  if (!poke) {
    return null;
  }

  const { types, order } = poke;

  if (!types || !order) {
    return null;
  }

  const type = types[0];

  const { before, next } = await fetchSurroundingPokes(order);

  return (
    <nav className="grid gap-y-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 lg:gap-x-20 xl:gap-x-0">
      {before && (
        <NavButton.Before
          pokeInfo={before}
          type={type}
        />
      )}
      <div className="md:col-start-2 lg:col-start-3 xl:col-start-4">
        {next && (
          <NavButton.Next
            pokeInfo={next}
            type={type}
          />
        )}
      </div>
    </nav>
  );
}
