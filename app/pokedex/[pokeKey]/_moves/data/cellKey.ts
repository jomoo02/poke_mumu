import type { MachineType } from '@/app/models/detail.type';

export type CellKey =
  'name'
  | 'type'
  | 'damageClass'
  | 'power'
  | 'accuracy'
  | 'level'
  | 'pre'
  | MachineType;

const moveCellKeys: Record<CellKey, CellKey> = {
  name: 'name',
  type: 'type',
  damageClass: 'damageClass',
  power: 'power',
  accuracy: 'accuracy',
  level: 'level',
  pre: 'pre',
  hm: 'hm',
  tm: 'tm',
  tr: 'tr',
};

export type HeadItem = {
  key: CellKey;
  content: string;
  className: string;
};

export type MoveTableHeadContents = Record<CellKey, string>;

const moveTableHeadContentsEn: MoveTableHeadContents = {
  name: 'name',
  type: 'type',
  damageClass: 'cat.',
  power: 'power',
  accuracy: 'acc.',
  level: 'Lv.',
  pre: 'Poke',
  hm: 'HM',
  tm: 'TM',
  tr: 'TR',
};

const moveTableHeadContentsKo: MoveTableHeadContents = {
  name: '기술',
  type: '타입',
  damageClass: '분류',
  power: '위력',
  accuracy: '명중률',
  level: 'Lv.',
  pre: 'Poke',
  hm: 'HM',
  tm: 'TM',
  tr: 'TR',
};

const localizedMoveTableHeadContents: Record<'en' | 'ko', MoveTableHeadContents> = {
  en: moveTableHeadContentsEn,
  ko: moveTableHeadContentsKo,
};

export {
  moveCellKeys,
  localizedMoveTableHeadContents,
};
