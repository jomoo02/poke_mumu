type StatKeyType =
  'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed';

interface Stat {
  stat: StatKeyType;
  value: number;
}

interface StatObjType {
  stat: StatKeyType;
  value: number;
  effortValue: number;
}

export type {
  StatKeyType,
  Stat,
  StatObjType,
};
