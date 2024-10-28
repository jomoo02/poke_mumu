import type { DamageClassType } from '@/app/components/damage-class';
import { PokeType } from '@/app/data/pokeType';
import { LanguageContent } from '@/app/types/languageContent.type';
import type { Version } from '@/app/data/version';

type MoveItem = {
  accuracy: number;
  power: number | null;
  damage_class: DamageClassType;
  type: PokeType;
  name: LanguageContent
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

type Moves = {
  gen: number;
  genMoves: GenMove[];
}[];

export type {
  MoveItem,
  Moves,
};
