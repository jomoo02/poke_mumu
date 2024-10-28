'use server';

import DetailModel, { type PokeDetail } from '@/app/models/Detail';
import dbConnect from '@/app/api/db/connect';

export async function fetchPokeDetail(pokeKey: string) {
  try {
    await dbConnect();

    const query = { pokeKey };
    const projection = { _id: 0 };

    const result = await DetailModel
      .findOne(query, projection)
      .lean<PokeDetail>();

    if (!result) {
      return undefined;
    }
    return result;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
