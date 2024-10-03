import { LanguageContentType } from '@/app/types/languageContent.type';
import { PokeTypeType } from './defense-compatibility.type';

type PokeDataType = {
  id: number;
  no: number;
  types?: PokeTypeType[];
  sprity?: string;
  name: LanguageContentType;
  form: LanguageContentType;
  order?: number;
  pokeKey: string;
  chainIndex?: number;
  height?: number;
  weight?: number;
  captureRate?: number;
  eggGroups?: string[];
  genderRate?: number;
  genera?: LanguageContentType;
  growthRate?: string;
  hatchCounter?: number;
  pokedexNumbers?: {
    entryNumber: number;
    pokedex: string;
  }[];
};

export type {
  PokeDataType,
};
