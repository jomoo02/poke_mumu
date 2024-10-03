import { PokeTypeType } from '@/app/types/pokeType.type';

type PokeTypesType = PokeTypeType[];

type EffectiveType =
  'superEffective'
  | 'notVeryEffective'
  | 'noEffect';

type DefenseCompatibilityType = Partial<Record<EffectiveType, PokeTypesType>>;

export type {
  PokeTypeType,
  PokeTypesType,
  EffectiveType,
  DefenseCompatibilityType,
};
