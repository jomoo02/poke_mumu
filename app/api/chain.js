'use server';

import ChainModelV2 from '../models/ChainV2.mjs';
import dbConnect from './db/connect.ts';

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

    const result = await ChainModelV2.find({}, projection).lean();

    return result;
  } catch (error) {
    console.error(`fetchAllChainIds error: ${error.message}`);

    return error;
  }
}

export async function fetchChain(index) {
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

    const result = await ChainModelV2
      .findOne(query, projection)
      .lean();

    return result;
  } catch (error) {
    console.error(`fechChain error index ${index}: ${error.message}`);

    return error;
  }
}

export async function fetchAllChain() {
  try {
    await dbConnect();

    const query = { };
    const projection = {
      _id: 0,
    };

    const result = await ChainModelV2
      .find(query, projection)
      .sort({ index: 1 })
      .lean();

    return result;
  } catch (error) {
    console.error(`fetchAllChain error: ${error.message}`);

    return error;
  }
}
