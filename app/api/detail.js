'use server';

import { cache } from 'react';
import DetailModel from '../models/Detail.mjs';
import dbConnect from './db/connect.ts';

export const fetchDetail = cache(async (pokeKey) => {
  await dbConnect();

  const query = { pokeKey };
  const projection = {
    _id: 0,
  };

  const result = await DetailModel
    .findOne(query, projection)
    .lean();

  return result;
});

// export default async function fetchDetail(pokeKey) {
//   try {
//     await dbConnect();

//     const query = { pokeKey };
//     const projection = {
//       _id: 0,
//     };

//     const result = await DetailModel
//       .findOne(query, projection)
//       .lean();

//     return result;
//   } catch (error) {
//     console.error(`fetchDetail Error!: ${error.message}`);
//     return error;
//   }
// }
