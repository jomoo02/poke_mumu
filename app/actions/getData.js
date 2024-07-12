'use server';

import PokeModel from '../models/Poke.mjs';
import dbConnect from '../api/db/connect.ts';

export default async function fetchPokes(index) {
  try {
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
  } catch (error) {
    console.error(error);

    return [];
  }
}
