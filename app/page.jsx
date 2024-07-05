import React from 'react';
import CardList from './ui/pokeCard/card-list';
import { fetchAllPoke } from './api/data';

export default async function Page() {
  const pokeData = await fetchAllPoke();
  return (
    <div>
      <CardList initialPokeData={pokeData} />
    </div>
  );
}
