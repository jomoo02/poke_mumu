import mongoose from 'mongoose';
import { LanguageContent } from '@/app/types/languageContent.type';
import type { MoveKey } from '@/app/translations/move';
import type { ItemKey } from '@/app/translations/item';
import type { PokeKey } from '@/app/translations/poke';
import type { PokeType } from '../data/pokeType';
import type { Area } from '../data/area';

export type TriggerKey =
  'level-up'
  | 'use-item'
  | 'trade'
  | 'other';

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
  known_move_type: PokeType;
  known_move: MoveKey;
  min_affection: string;
  min_beauty: string;
  min_happiness: string;
  min_level: number;
  needs_overworld_rain: string;
  party_species: PokeKey;
  party_type: PokeType;
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
  area: Area;
};

export type ConditionItem = {
  key: ConditionKey;
  value: number | string;
};

export type ConditionKey = keyof RenderContentValueMap;

export type Detail = {
  trigger: TriggerKey;
  condition: ConditionItem[];
};

export type ChainItem = {
  pokeKey: string;
  id: string;
  detail: Detail[] | [];
  from: string;
  name: LanguageContent;
  to: ChainItem[] | [];
};

export type Chain = {
  maxWidth: number;
  maxDepth: number;
  index?: number;
  chain: ChainItem[];
};

const chainSchema = new mongoose.Schema({
  index: {
    type: Number,
    unique: true,
  },
  chain: Array,
  ids: Array,
  maxWidth: Number,
  maxDepth: Number,
}, { collection: 'chain' });

const ChainModel = mongoose.models.chain || mongoose.model('chain', chainSchema);

export default ChainModel;
