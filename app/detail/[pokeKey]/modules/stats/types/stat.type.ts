type StatKeyType =
  'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed';

interface StatType {
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
  StatType,
  StatObjType,
};
