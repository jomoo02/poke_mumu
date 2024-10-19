'use server';

import { cache } from 'react';
import dbConnect from '@/app/api/db/connect';
import PokeModel from '../../../models/Poke';
import { PokeDataType } from '../types/pokeData.type';
import { SurroundingPokesType } from '../types/navigation.type';

export const fetchPokeKey = cache(async (pokeKey: string): Promise<PokeDataType | undefined> => {
  await dbConnect();
  const query = { pokeKey };
  const projection = {
    _id: 0,
  };

  const result = await PokeModel
    .findOne(query, projection)
    .lean<PokeDataType>();

  if (result) {
    return result;
  }
  return undefined;
});

export const fetchAllPoke = cache(async () => {
  await dbConnect();

  const query = {};
  const projection = {
    _id: 0,
  };
  const result = await PokeModel
    .find(query, projection)
    .sort({ order: 1 })
    .lean();

  return result;
});

export const fetchPokes = cache(async (index: number) => {
  await dbConnect();

  const start = (index * 240) + 1;
  const end = start + 240 - 1;
  const query = { order: { $gte: start, $lte: end } };
  const projection = {
    _id: 0,
  };

  const result = await PokeModel
    .find(query, projection)
    .sort({ order: 1 })
    .lean();

  return result;
});

export const fetchPokesRange = cache(async (start: number, end: number) => {
  await dbConnect();

  const s = (start * 240) + 1;
  const e = (end * 240) + 240;

  const query = { order: { $gte: s, $lte: e } };
  const projection = {
    _id: 0,
  };

  const result = await PokeModel
    .find(query, projection)
    .sort({ order: 1 })
    .lean();

  return result;
});

export const fetchSurroundingPokes = cache(async (order: number) => {
  await dbConnect();

  const surroundingPokes: SurroundingPokesType = {};

  const projection = {
    _id: 0,
    pokeKey: 1,
    sprity: 1,
    order: 1,
    name: 1,
    form: 1,
    no: 1,
  };

  const beforePoke = await PokeModel
    .findOne({ order: Number(order) - 1 }, projection)
    .lean<PokeDataType>();

  const nextPoke = await PokeModel
    .findOne({ order: Number(order) + 1 }, projection)
    .lean<PokeDataType>();

  if (beforePoke) {
    surroundingPokes.before = beforePoke;
  } if (nextPoke) {
    surroundingPokes.next = nextPoke;
  }
  return surroundingPokes;
});