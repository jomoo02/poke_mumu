'use server';

import { checkTextLanguageKo, checkTextNumberType } from '../lib/utils';
import PokeModel from '../models/Poke.mjs';
import dbConnect from './db/connect';

function filterById(pokes) {
  const idSet = new Set();
  const duplicationIdSet = new Set();

  const filteringPoeks = pokes.filter(({ id }) => {
    if (!idSet.has(id)) {
      idSet.add(id);
      return true;
    }
    duplicationIdSet.add(id);
    return false;
  });

  return filteringPoeks.map((poke) => {
    if ([...duplicationIdSet].find((id) => id === poke.id)) {
      return {
        ...poke,
        form: {
          en: 'default',
          ko: 'default',
        },
      };
    }
    return poke;
  });
}

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
      key: 1,
      _id: 0,
    };

    const result = await PokeModel
      .find(query, projection)
      .sort({ no: 1, id: 1 })
      .lean();

    return filterById(result);
  } catch (error) {
    console.error(error);
    return [];
  }
}
