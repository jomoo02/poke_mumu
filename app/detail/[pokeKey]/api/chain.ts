'use server';

import dbConnect from '@/app/api/db/connect';
import ChainModel from '@/app/models/Chain';
import type { ChainItem } from '../modules/evolution-2/types/chain';

interface Chain {
  maxWidth: number;
  maxDepth: number;
  index?: number;
  chain: ChainItem[];
}

export async function fetchAllChainIds() {
  try {
    await dbConnect();

    const projection = {
      _id: 0,
      chainIndex: 1,
      ids: 1,
      maxWidth: 1,
      maxDepth: 1,
    };

    const result = await ChainModel.find({}, projection).lean();

    return result;
  } catch (error) {
    console.error('fetchAllChainIds error');

    return error;
  }
}

export async function fetchChain(index: number): Promise<Chain | undefined> {
  try {
    await dbConnect();

    const query = { index };
    const projection = {
      _id: 0,
      index: 1,
      chain: 1,
      maxWidth: 1,
      maxDepth: 1,
    };

    const result = await ChainModel
      .findOne(query, projection)
      .lean<Chain>();

    if (result) {
      return result;
    }
    return undefined;
  } catch (error) {
    console.error('fetchChain error');
    return undefined;
  }
}

export async function fetchAllChain() {
  try {
    await dbConnect();

    const query = { };
    const projection = {
      _id: 0,
    };

    const result = await ChainModel
      .find(query, projection)
      .sort({ index: 1 })
      .lean();

    return result;
  } catch (error) {
    console.error('fetchAllChain error');
    return error;
  }
}
