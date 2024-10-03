import { StatKeyType } from '../detail/[pokeKey]/modules/stats/types/stat.type';

const statKo: Record<StatKeyType, string> = {
  hp: '체력',
  attack: '공격',
  defense: '방어',
  'special-attack': '특수공격',
  'special-defense': '특수방어',
  speed: '스피드',
};

const statEn: Record<StatKeyType, string> = {
  hp: 'hp',
  attack: 'attack',
  defense: 'defense',
  'special-attack': 'sp.Atk',
  'special-defense': 'sp.Def',
  speed: 'speed',
};

const totalKo = '합계';

const totalEn = 'total';

const effortKo = '노력치';
const effortEn = 'effort';

const statTypeKo = {
  base: '종족값',
  effort: '노력치',
};

export {
  statKo,
  statTypeKo,
  statEn,
  totalKo,
  totalEn,
  effortEn,
  effortKo,
};
