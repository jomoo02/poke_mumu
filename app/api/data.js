'use server';

import PokeModel from '../models/Poke.mjs';
import dbConnect from './db/connect.ts';

export async function fetchPokes(index) {
  console.log('fetch');
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
      _id: 0,
    };

    const result = await PokeModel
      .find(query, projection)
      .sort({ no: 1, id: 1 })
      .lean();
    console.log('result: ', result);

    return result;
  } catch (error) {
    console.log('error 발생!');
    console.error(error);

    return [];
  }
}
