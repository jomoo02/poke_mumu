export type Stat =
  'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed';

const statKo: Record<Stat, string> = {
  hp: '체력',
  attack: '공격',
  defense: '방어',
  'special-attack': '특수공격',
  'special-defense': '특수방어',
  speed: '스피드',
};

const statEn: Record<Stat, string> = {
  hp: 'hp',
  attack: 'attack',
  defense: 'defense',
  'special-attack': 'sp.Atk',
  'special-defense': 'sp.Def',
  speed: 'speed',
};

export {
  statEn,
  statKo,
};
