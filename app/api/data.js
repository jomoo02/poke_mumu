'use server';

import { cache } from 'react';
import PokeModel from '../models/Poke.mjs';
import dbConnect from './db/connect.ts';

export async function fetchPoke(order) {
  try {
    await dbConnect();

    const query = { order };
    const projection = {
      _id: 0,
    };
    const result = await PokeModel
      .findOne(query, projection)
      .lean();

    return result;
  } catch (error) {
    console.error(error);
    return '';
  }
}

export async function fetchPokeKey(pokeKey) {
  try {
    await dbConnect();

    const query = { pokeKey };
    const projection = {
      _id: 0,
    };
    const result = await PokeModel
      .findOne(query, projection)
      .lean();

    return result;
  } catch (error) {
    console.error(`error fetchPokeKey: ${error.message}`);
    return error;
  }
}

export async function fetchAllPoke() {
  try {
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
  } catch (error) {
    console.error(`error fetchPokeKey: ${error.message}`);
    return error;
  }
}

// export async function fetchPokes(index) {
//   try {
//     await dbConnect();

//     const start = (index * 240) + 1;
//     const end = start + 240 - 1;
//     const query = { order: { $gte: start, $lte: end } };
//     const projection = {
//       _id: 0,
//     };

//     const result = await PokeModel
//       .find(query, projection)
//       .sort({ order: 1 })
//       .lean();

//     return result;
//   } catch (error) {
//     console.error(error);

//     return [];
//   }
// }

export const fetchPokes = cache(async (index) => {
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

export const fetchPokesRange = cache(async (start, end) => {
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

export async function fetchSurroundingPokes(order) {
  try {
    const surroundingPokes = {};

    const projection = {
      _id: 0,
      pokeKey: 1,
      sprity: 1,
      order: 1,
      name: 1,
      form: 1,
      no: 1,
    };

    const beforePoke = await PokeModel.findOne({ order: Number(order) - 1 }, projection).lean();
    const nextPoke = await PokeModel.findOne({ order: Number(order) + 1 }, projection).lean();

    if (beforePoke) {
      surroundingPokes.before = beforePoke;
    } if (nextPoke) {
      surroundingPokes.next = nextPoke;
    }
    return surroundingPokes;
  } catch (error) {
    console.error(`error fetchSurroundingPokes ${error.message}`);
    return error;
  }
}
