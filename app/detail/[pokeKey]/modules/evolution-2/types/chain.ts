import type { LanguageContent } from '@/app/types/languageContent.type';
import type { TriggerKey } from './trigger';
import type { ConditionItem } from './condition';

type Detail = {
  trigger: TriggerKey;
  condition: ConditionItem[];
};

type ChainItem = {
  pokeKey: string;
  id: string;
  detail: Detail[];
  from: string;
  name: LanguageContent;
  to: ChainItem[];
};

export type { Detail, ChainItem };
