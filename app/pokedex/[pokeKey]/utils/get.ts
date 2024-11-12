import { cache } from 'react';
import { fetchChain } from '../api/chain';
import { fetchPoke, fetchSurroundingPokes } from '../api/poke';
import { fetchPokeDetail } from '../api/detail';
import 'server-only';

export const getPoke = cache(async (pokeKey: string) => {
  const poke = await fetchPoke(pokeKey);

  return poke;
});

export const getSurroundingPokes = cache(async (order: number) => {
  const surroundingPokes = await fetchSurroundingPokes(order);
  return surroundingPokes;
});

export const getPokeDetail = cache(async (pokeKey: string) => {
  const pokeDetail = await fetchPokeDetail(pokeKey);
  return pokeDetail;
});

export const getChain = cache(async (chainIndex: number) => {
  const chain = await fetchChain(chainIndex);
  return chain;
});

export const preload = (pokeKey: string) => {
  getPoke(pokeKey);
  getPokeDetail(pokeKey);
};
