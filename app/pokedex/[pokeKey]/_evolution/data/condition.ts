// import type { MoveKey } from '@/app/data/move';
// import type { ItemKey } from '@/app/data/item';
// import type { Type } from '@/app/data/pokeType';
// import type { PartySpeciesPoke } from '@/app/data/partySpecies';
// import type { Region } from '@/app/data/region';
// import type { Area } from '@/app/data/area';
// import type { TimeOfDay } from '@/app/data/timeOfDay';
// import type { TradeSpeciesPoke } from '@/app/data/tradeSpecies';
// import type { OtherPoke } from './conditionOther';

// export type ConditionKey =
//   'other'
//   | 'spin'
//   | 'recoil_damage'
//   | 'turn_upside_down'
//   | 'needs_overworld_rain'
//   | 'gender'
//   | 'item'
//   | 'held_item'
//   | 'agile_style'
//   | 'strong_style'
//   | 'known_move'
//   | 'known_move_type'
//   | 'use_move'
//   | 'min_affection'
//   | 'min_beauty'
//   | 'min_happiness'
//   | 'min_level'
//   // | 'trade'
//   | 'trade_species'
//   | 'relative_nature'
//   | 'relative_physical_stats'
//   | 'party_species'
//   | 'party_type'
//   | 'time_of_day'
//   | 'location'
//   | 'area';

// export type ConditionValueMap = {
//   gender: 1 | 2;
//   item: ItemKey;
//   held_item: ItemKey;
//   location: Region;
//   area: Area;
//   min_affection: number;
//   min_beauty: number;
//   min_happiness: number;
//   min_level: number;
//   known_move_type: Type;
//   known_move: MoveKey;
//   agile_style: MoveKey;
//   strong_style: MoveKey;
//   use_move: MoveKey;
//   needs_overworld_rain: boolean;
//   party_type: Type;
//   party_species: PartySpeciesPoke;
//   recoil_damage: number;
//   spin: string;
//   turn_upside_down: boolean;
//   other: OtherPoke;
//   relative_nature: 'amped' | 'lowKey';
//   relative_physical_stats: number;
//   time_of_day: TimeOfDay;
//   // trade: PokeKey;
//   trade_species: TradeSpeciesPoke;
// };

// export type ConditionItem<C extends ConditionKey> = {
//   key: C;
//   value: ConditionValueMap[C];
// };
