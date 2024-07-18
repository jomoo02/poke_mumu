'use server';

import { checkTextLanguageKo, checkTextNumberType } from '../lib/utils';
import PokeModel from '../models/Poke.mjs';
import dbConnect from './db/connect.ts';

function decideSearchQuery(text) {
  const isTextNumber = checkTextNumberType(text);

  if (isTextNumber) {
    return ({ no: Number(text) });
  }

  const isTextLanguageKo = checkTextLanguageKo(text);

  if (isTextLanguageKo) {
    return ({ 'name.ko': { $regex: text, $options: 'i' } });
  }

  return ({ 'name.en': { $regex: text, $options: 'i' } });
}

export async function fetchSearchPokes(text) {
  try {
    await dbConnect();

    const query = decideSearchQuery(text);
    const projection = {
      name: 1,
      id: 1,
      types: 1,
      sprity: 1,
      no: 1,
      form: 1,
      pokeKey: 1,
      order: 1,
      _id: 0,
    };

    const result = await PokeModel
      .find(query, projection)
      .sort({ order: 1 })
      .lean();

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}
