import type { MoveKey } from '@/app/translations/move';
import type { ItemKey } from '@/app/translations/item';
import type { PokeKey } from '@/app/translations/poke';
import type { PokeTypeItem } from '@/app/data/pokeType';
import type { AreaKey } from './area';

type ConditionOtherCase =
  'sirfetchD'
  | 'shedinja'
  | 'runerigus'
  | 'kingambit'
  | 'urshifu_single'
  | 'urshifu_rapid'
  | 'lets_go'
  | 'maushold'
  | 'palafin'
  | 'gholdengo';

export type RenderContentValueMap = {
  agile_style: MoveKey;
  gender: number;
  held_item: ItemKey;
  item: ItemKey;
  known_move_type: PokeTypeItem;
  known_move: MoveKey;
  min_affection: string;
  min_beauty: string;
  min_happiness: string;
  min_level: number;
  needs_overworld_rain: string;
  party_species: PokeKey;
  party_type: PokeTypeItem;
  recoil_damage: number;
  relative_nature: 'amped' | 'lowKey';
  relative_physical_stats: number;
  spin: string;
  strong_style: MoveKey;
  time_of_day: 'night' | 'day' | 'dusk' | 'full-moon';
  trade: PokeKey;
  trade_species: PokeKey;
  turn_upside_down: string;
  use_move: MoveKey;
  location: 'alola' | 'galar' | 'hisui';
  other: ConditionOtherCase;
  area: AreaKey;
};

export type ConditionKey = keyof RenderContentValueMap;

// export type ValueKey =
//   number
//   | string
//   | ItemKey
//   | PokeKey
//   | MoveKey
//   | ConditionOtherCase
//   | AreaKey
//   | PokeTypeItem
//   | 'amped' | 'lowKey'
//   | 'alola' | 'galar' | 'hisui'
//   | 'night' | 'day' | 'dusk' | 'full-moon';

interface ConditionItem {
  key: ConditionKey,
  value: number | string,
}

interface Affix {
  prefix?: string,
  suffix?: string,
}

export type {
  ConditionItem,
  ConditionOtherCase,
  Affix,
};
