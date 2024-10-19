import type { LanguageContent } from '@/app/types/languageContent.type';
import type { Detail } from '../modules/evolution-2/types/chain';

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
