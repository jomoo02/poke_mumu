'use server';

import { cache } from 'react';
import DetailModel from '@/app/models/Detail';
import dbConnect from '@/app/api/db/connect';
import { LanguageContentType } from '@/app/types/languageContent.type';
import { StatType } from '../modules/stats/types/stat.type';
import { FormType } from '../types/forms.type';

type Ability = {
  isHidden: boolean;
  name: LanguageContentType;
  flavorText: LanguageContentType;
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
  forms: FormType[],
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
