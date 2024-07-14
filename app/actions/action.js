'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function setPokeCardIndex({ order, pokeKey }) {
  const cardIndex = Math.floor((order - 1) / 240);

  cookies().set('poke-card-index', `${cardIndex}`, { path: '/' });

  // cookies().set('poke-card-index', cardIndex, { path: '/' });

  // revalidatePath('/detail');
  // redirect(`detail/${pokeKey}`);
}

// eslint-disable-next-line import/prefer-default-export
export { setPokeCardIndex };
