import { cache } from 'react';
import { fetchAllPoke } from '../api/poke';
import 'server-only';

export const getPokes = cache(async () => {
  const pokes = await fetchAllPoke();
  return pokes;
});

export const preload = () => {
  getPokes();
};
