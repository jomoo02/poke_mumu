'use server';

import PokeModel from '../models/Poke.mjs';
import { connectMongoose, disconnectMongoose } from './db/connect.mjs';

export async function fetchPokes(index) {
  console.log('fetch');
  try {
    await connectMongoose();
    const start = (index * 240) + 1;
    const end = start + 240 - 1;
    // const start = 1;
    // const end = 6;

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
    await disconnectMongoose();

    return result;
  } catch (error) {
    console.log('error 발생!');
    console.error(error);
    await disconnectMongoose();
    return [];
  }
}
