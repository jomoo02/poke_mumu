import { LanguageContent } from '@/app/types/languageContent.type';
import { TypeItem } from '@/app/components/type';

type Stats = {
  stat: string;
  value: number;
};

type PokeItem = {
  pokeKey: string;
  sprite: string;
  name: LanguageContent;
  types: TypeItem[];
  form: LanguageContent;
  no: string;
  order: number;
  stats: Stats[];
};

export type {
  PokeItem,
};
