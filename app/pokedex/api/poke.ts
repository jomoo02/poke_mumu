'use server';

import PokeV2Model, { type CardPoke } from '@/app/models/PokeV2';
import dbConnect from '@/app/api/db/connect';

export async function fetchAllPoke() {
  await dbConnect();

  const query = {};
  const projection = { _id: 0 };

  const res = await PokeV2Model
    .find(query, projection)
    .sort({ order: 1 })
    .lean<CardPoke[]>();

  return res;
}
