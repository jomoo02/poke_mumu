'use server';

import PokeV2Model from '@/app/models/PokeV2';
import dbConnect from '@/app/api/db/connect';
import type { PokeItem } from '../types/poke';

export async function fetchAllPoke(): Promise<PokeItem[] | undefined> {
  await dbConnect();

  const query = {};
  const projection = { _id: 0 };

  const res = await PokeV2Model
    .find(query, projection)
    .sort({ order: 1 })
    .lean<PokeItem[]>();

  return res;
}
