'use server';

import dbConnect from '@/app/api/db/connect';
import ChainModel from '@/app/models/Chain';
import type { Chain } from '@/app/models/chain.type';

export async function fetchChain(chainIndex: number) {
  try {
    await dbConnect();

    const query = { index: chainIndex };
    const projection = { _id: 0 };

    const result = await ChainModel
      .findOne(query, projection)
      .lean<Chain>();

    if (result) {
      return result;
    }
    return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
