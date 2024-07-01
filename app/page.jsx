import React from 'react';
import CardList from './ui/pokeCard/card-list';
import { fetchPokes } from './api/data';

export default async function Page() {
  const pokeData = await fetchPokes(0);

  return (
    <div>
      <CardList initialPokeData={pokeData} />
    </div>
  );
}
