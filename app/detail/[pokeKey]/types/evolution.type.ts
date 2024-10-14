import type { LanguageContent } from '@/app/types/languageContent.type';

type Condition = {
  key: string;
  value: number | string;
};

type Detail = {
  trigger: string;
  condition: Condition[];
};

interface ChainItem {
  pokeKey: string;
  id: string;
  detail: Detail[];
  from: string;
  name: LanguageContent;
  to: ChainItem[];
}

export type {
  ChainItem,
};
