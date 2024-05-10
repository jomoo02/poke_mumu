'use server';

import DetailModel from '../models/Detail.mjs';
import dbConnect from './db/connect.ts';

export default async function fetchDetail(id) {
  try {
    await dbConnect();

    const query = { id };
    const projection = {
      _id: 0,
    };

    const result = await DetailModel
      .findOne(query, projection)
      .lean();

    return result;
  } catch (error) {
    console.error(`fetchDetail Error!: ${error}`);
    return error.message;
  }
}
