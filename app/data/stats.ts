export type Stat =
  'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed';

export type Stats = Record<Stat, string>;

const statKo: Stats = {
  hp: '체력',
  attack: '공격',
  defense: '방어',
  'special-attack': '특수공격',
  'special-defense': '특수방어',
  speed: '스피드',
};

const statEn: Stats = {
  hp: 'hp',
  attack: 'attack',
  defense: 'defense',
  'special-attack': 'sp.Atk',
  'special-defense': 'sp.Def',
  speed: 'speed',
};

const localizedStats: Record<'ko' | 'en', Stats> = {
  ko: statKo,
  en: statEn,
};

export {
  localizedStats,
  statEn,
  statKo,
};
