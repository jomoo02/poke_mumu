import type { LanguageContent } from '../types/languageContent.type';
import type { Type } from '../data/pokeType';
import type { LocalPokedex } from '../data/localPokedex';
import type { Stat } from '../data/stats';

export type StatItem = {
  stat: Stat;
  value: number;
};

export type PokedexNumber = {
  pokedex: LocalPokedex,
  entryNumber: number;
};

export type Poke = {
  pokeKey: string;
  sprite: string;
  name: LanguageContent;
  form: LanguageContent;
  types: Type[];
  stats: StatItem[];
  no: string;
  order: number;
  pokedexNumbers: PokedexNumber[];
};
