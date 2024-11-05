import type { LanguageContent } from '@/app/types/languageContent.type';
import type { DamageClassType } from '@/app/components/damage-class';
import type { Type } from '@/app/data/pokeType';
import type { EggGroup } from '@/app/data/eggGroup';
import type { GrowthRate } from '@/app/data/growthRate';
import type { Stat } from '@/app/data/stats';
import type { Version } from '@/app/data/version';

export type MoveItem = {
  accuracy: number;
  power: number | null;
  damage_class: DamageClassType;
  type: Type;
  name: LanguageContent;
};

type VersionMove = {
  'level-up': {
    level: number;
    move: MoveItem;
  }[] | [];
  machine: {
    move: MoveItem;
    machine: {
      id: number;
      type: string;
      number: number;
    };
  }[] | [];
  tutor: {
    move: MoveItem;
  }[] | [];
  egg: {
    move: MoveItem;
  }[] | [];
  pre: {
    move: MoveItem;
    level: number;
    preIds: number[];
  }[] | [];
};

type GenMove = {
  version: Version;
  versionMoves: VersionMove;
}[];

export type Moves = {
  gen: number;
  genMoves: GenMove[];
}[];

export type Ability = {
  isHidden: boolean;
  name: LanguageContent;
  flavorText: LanguageContent;
};

export type Form = {
  name: LanguageContent;
  id: string;
};

export type PokeDetail = {
  pokeKey: string;
  chainIndex: number;
  abilities: Ability[];
  moves: Moves;
  forms: Form[];
  speciesName: LanguageContent;
  breeding: {
    eggGroups: EggGroup[];
    hatchCounter: number;
    genderRate: number;
  };
  detail: {
    genera: LanguageContent;
    height: number;
    weight: number;
    captureRate: number;
    growthRate: GrowthRate;
    effortStats: {
      stat: Stat;
      value: number;
    }[];
  };
};
