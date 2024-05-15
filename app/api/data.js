'use server';

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
    console.log(error);
    return '';
  }
}

export async function fetchPokes(index) {
  try {
    await dbConnect();

    const start = (index * 240) + 1;
    const end = start + 240 - 1;
    const query = { order: { $gte: start, $lte: end } };
    const projection = {
      name: 1,
      id: 1,
      types: 1,
      sprity: 1,
      no: 1,
      form: 1,
      key: 1,
      order: 1,
      _id: 0,
    };

    const result = await PokeModel
      .find(query, projection)
      .sort({ order: 1 })
      .lean();

    return result;
  } catch (error) {
    console.error(error);

    return [];
  }
}
