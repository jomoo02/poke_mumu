import React, { Suspense } from 'react';
import CardList from './ui/pokeCard/card-list';
import CardListClient from './ui/pokeCard/card-list-client';
import { fetchPokes, fetchAllPoke } from './api/data';
import ScrollTop from './ui/scrollTop';

export default async function Page() {
  // const pokeData = await fetchPokes(0);
  // const pokeData = await fetchAllPoke();
  return (
    <>
      {/* <Suspense fallback={<p>loading...</p>}>
        <CardList initialPokeData={pokeData} />
      </Suspense> */}
      {/* <ScrollTop /> */}
      <CardListClient />
    </>
  );
}
