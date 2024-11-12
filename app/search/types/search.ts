import type { LanguageContent } from '@/app/types/languageContent.type';
import type { PokeTypeItem } from '@/app/data/pokeType';

type SearchPoke = {
  form: LanguageContent;
  name: LanguageContent;
  no: string;
  order: number;
  pokeKey: string;
  sprite: string;
  types: PokeTypeItem[];
};

export type {
  SearchPoke,
};
