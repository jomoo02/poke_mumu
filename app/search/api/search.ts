'use server';

import PokeV2Model from '@/app/models/PokeV2';
import dbConnect from '@/app/api/db/connect';
import { checkTextLanguageKo, checkTextNumberType } from '@/app/utils/utils';
import type { SearchPoke } from '../types/search';

function setNo(inputText: string) {
  const numberInputText = Number(inputText);

  if (numberInputText < 10) {
    return `000${inputText}`;
  } if (numberInputText < 100) {
    return `00${inputText}`;
  } if (numberInputText < 1000) {
    return `0${inputText}`;
  } return inputText;
}

function setSearchQuery(inputText: string) {
  const isNumber = checkTextNumberType(inputText);

  if (isNumber) {
    const no = setNo(inputText);
    return { no };
  }

  const isTextLanguageKo = checkTextLanguageKo(inputText);

  if (isTextLanguageKo) {
    return { 'name.ko': { $regex: inputText, $options: 'i' } };
  }

  return { 'name.en': { $regex: inputText, $options: 'i' } };
}

export async function fetchSearch(inputText: string): Promise<SearchPoke[] | []> {
  try {
    await dbConnect();

    const query = setSearchQuery(inputText);
    const projection = {
      name: 1,
      sprite: 1,
      types: 1,
      form: 1,
      order: 1,
      pokeKey: 1,
      no: 1,
      _id: 0,
    };

    const result = await PokeV2Model
      .find(query, projection)
      .sort({ order: 1 })
      .lean<SearchPoke[]>();

    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
}
