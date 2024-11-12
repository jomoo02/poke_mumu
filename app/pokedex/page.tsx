import React from 'react';
import './styles/pokedex.css';
import { preload, getPokes } from './utils/get-poke';
import PokeCardList from './components/poke-card-list';

async function PokeCards() {
  const allPoke = await getPokes();

  if (!allPoke) {
    return null;
  }

  return (
    <PokeCardList pokes={allPoke} />
  );
}

export default async function Page() {
  preload();

  return (
    <PokeCards />
  );
}
