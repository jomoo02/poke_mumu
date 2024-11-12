type HeaderItem =
  'name'
  | 'type'
  | 'total'
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed';

const headerItemEn: Record<HeaderItem, string> = {
  name: 'Name',
  type: 'Type',
  total: 'Total',
  hp: 'Hp',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp.Atk',
  'special-defense': 'Sp.Def',
  speed: 'Speed',
};

const headerItemKo: Record<HeaderItem, string> = {
  name: '이름',
  type: '타입',
  total: '종족값',
  hp: '체력',
  attack: '공격',
  defense: '방어',
  'special-attack': '특수공격',
  'special-defense': '특수방어',
  speed: '스피드',
};

export {
  headerItemEn,
  headerItemKo,
};
