import React from 'react';
import { fetchAllPoke } from './api/data';
import PokeCardList from './components/pokeCard/card-list';

export default async function Page() {
  const data = await fetchAllPoke();

  return (
    <PokeCardList initialData={data} />
  );
}
