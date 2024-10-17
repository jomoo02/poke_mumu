import React from 'react';
import { preload, getPokes } from './utils/get-poke';
import PokeCard from './components/poke-card';
import PokeCardList from './components/poke-card-list';

async function PokeCards() {
  const allPoke = await getPokes();

  if (!allPoke) {
    return null;
  }

  return (
    <div className="grid justify-center">
      <PokeCardList pokes={allPoke} />
    </div>
  );
}

export default async function Page() {
  preload();

  return (
    <PokeCards />
  );
}
