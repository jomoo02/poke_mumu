'use server';

import PokeModel from '../models/Poke.mjs';

export async function fetchPokes(index) {
  try {
    const start = (index * 240) + 1;
    const end = start + 240 - 1;
    const result = await PokeModel
      .find(
        { order: { $gte: start, $lte: end } },
        {
          name: 1, id: 1, types: 1, sprity: 1, no: 1, _id: 0, form: 1, key: 1,
        },
      )
      .sort({ no: 1, id: 1 })
      .lean();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function test() {
  console.log(1);
}
