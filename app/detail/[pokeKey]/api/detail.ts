'use server';

import { cache } from 'react';
import DetailModel from '@/app/models/Detail';
import dbConnect from '@/app/api/db/connect';
import { StatType } from '../modules/stats/types/stat.type';

type LocaleContent = {
  ko: string;
  en: string;
};

type Ability = {
  isHidden: boolean;
  name: LocaleContent;
  flavorText: LocaleContent;
};

type genMoves = {
  version: string;
  versionMoves: any;
};

type DetailResultType = {
  abilities: Ability[];
  stats: {
    baseStats: StatType[];
    effortStats: StatType[];
  };
  moves: {
    gen: number;
    genMoves: genMoves;
  }[];
  forms: {
    id: string;
    name: LocaleContent;
  }[];
  speciesName: LocaleContent;
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
