'use server';

import { cookies } from 'next/headers';

async function setPokeCardIndex(index) {
  const cardIndex = Math.floor((index - 1) / 240);

  cookies().set('poke-card-index', cardIndex);
}

// eslint-disable-next-line import/prefer-default-export
export { setPokeCardIndex };
