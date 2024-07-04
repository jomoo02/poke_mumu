import React from 'react';
import CardList from './ui/pokeCard/card-list';
import { fetchPokes, fetchAllPoke } from './api/data';

export default async function Page() {
  const pokeData = await fetchPokes(0);
  // const pokeData = await fetchAllPoke();
  return (
    <div>
      <CardList initialPokeData={pokeData} />
    </div>
  );
}
