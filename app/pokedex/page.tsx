import React, { Suspense } from 'react';
import { fetchAllPoke } from './api/poke';
import PokeCardList from './components/poke-card-list';

async function PokeCards() {
  const allPoke = await fetchAllPoke();

  if (!allPoke) {
    return null;
  }

  return <PokeCardList pokeList={allPoke} />;
}

export default async function Page() {
  fetchAllPoke();

  return (
    <Suspense fallback={<div>...loading</div>}>
      <PokeCards />
    </Suspense>
  );
}
