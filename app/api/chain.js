'use server';

import ChainModel from '../models/Chain.mjs';
import dbConnect from './db/connect.ts';

export async function fetchAllChainIds() {
  try {
    await dbConnect();

    const projection = {
      _id: 0,
      chainIndex: 1,
      ids: 1,
    };

    const result = await ChainModel.find({}, projection).lean();

    return result;
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function fetchChain(chainIndex) {
  try {
    await dbConnect();

    const query = { chainIndex };
    const projection = {
      _id: 0,
      chainIndex: 1,
      chain: 1,
    };

    const result = await ChainModel
      .findOne(query, projection)
      .lean();

    return result;
  } catch (error) {
    console.log(error);

    return '';
  }
}
