'use server';

import DetailModel from '../models/Detail.mjs';
import dbConnect from './db/connect.ts';

export default async function fetchDetail(pokeKey) {
  try {
    await dbConnect();

    const query = { pokeKey };
    const projection = {
      _id: 0,
    };

    const result = await DetailModel
      .findOne(query, projection)
      .lean();

    return result;
  } catch (error) {
    console.error(`fetchDetail Error!: ${error.message}`);
  
    return error;
  }
}

// export async function fetchDetailPokeKey() {
//   try {
//     await dbConnect();
//     const query = {};
//     const projection = {
//       _id: 0,
//       pokeKey: 1,
//       speciesName: 1,
//       forms: 1,
//     };
//     const res = await DetailModel.find(query, projection).lean();
//     return res;
//   } catch (error) {
//     console.error(`fetchDetailPokeKey error: ${error.message}`);
//     return error;
//   }
// }
