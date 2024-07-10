'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function setPokeCardIndex({ order, pokeKey }) {
  const cardIndex = Math.floor((order - 1) / 240);

  cookies().set('poke-card-index', cardIndex);

  redirect(`detail/${pokeKey}`);
}

// eslint-disable-next-line import/prefer-default-export
export { setPokeCardIndex };
