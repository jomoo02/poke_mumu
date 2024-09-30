'use server';

import { cache } from 'react';
import DetailModel from '../models/Detail';
import dbConnect from './db/connect';

type LocaleContent = {
  ko: string;
  en: string;
};

type Ability = {
  isHidden: boolean;
  name: LocaleContent;
  flavorText: LocaleContent;
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
    name: LocaleContent;
  };
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
