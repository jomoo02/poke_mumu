'use server';

import { cache } from 'react';
import DetailModel from '../models/Detail';
import dbConnect from './db/connect';
import { LanguageContentType } from '../types/languageContent.type';

type Ability = {
  isHidden: boolean;
  name: LanguageContentType;
  flavorText: LanguageContentType;
};

type Stat = {
  stat: string;
  value: number;
};

type genMoves = {
  version: string;
  versionMoves: any;
};

type DetailResultType = {
  abilities: Ability[];
  stats: {
    baseStats: Stat[];
    effortStats: Stat[];
  };
  moves: {
    gen: number;
    genMoves: genMoves;
  }[];
  forms: {
    id: string;
    name: LanguageContentType;
  }[];
  speciesName: LanguageContentType;
  pokeKey: string;
};

export const fetchDetail = cache(async (pokeKey: string): Promise<DetailResultType | undefined> => {
  await dbConnect();

  const query = { pokeKey };
  const projection = {
    _id: 0,
  };

  const result = await DetailModel
    .findOne(query, projection)
    .lean<DetailResultType>();

  if (!result) {
    return undefined;
  }

  return result;
});
