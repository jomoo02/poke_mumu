'use server';

import PokeModel from '../models/Poke.mjs';

export async function fetchPokes(index) {
  try {
    const start = (index * 240) + 1;
    const end = start + 240 - 1;

    const query = { order: { $gte: start, $lte: end } };
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

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const filterById = (pokes) => {
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
};

export async function fetchSearchPokes(text) {
  try {
    const parseIntText = Number.parseInt(text, 10);
    const query = Number.isNaN(parseIntText) ? { 'name.ko': { $regex: text, $options: 'i' } } : { no: parseIntText };
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
