const abilities = 'abilities';
const basicInfo = 'basicInfo';
const defenseCompatibility = 'defenseCompatibility';
const evolution = 'evolution';
const forms = 'forms';
const moves = 'moves';
const stats = 'stats';

const headerKeys = {
  abilities,
  basicInfo,
  defenseCompatibility,
  evolution,
  forms,
  moves,
  stats,
};

const headerContentsKo = {
  [abilities]: '특성',
  [basicInfo]: '포켓몬 정보',
  [defenseCompatibility]: '방어 상성',
  [evolution]: '진화',
  [forms]: '모습',
  [moves]: '기술',
  [stats]: '스탯',
  default: '',
};

const headerContentsEn = {
  [abilities]: 'ability',
  [basicInfo]: 'poké Information',
  [defenseCompatibility]: 'defense Compatibility',
  [evolution]: 'Evolution Tree',
  [forms]: 'form',
  [moves]: 'moves',
  [stats]: 'stat',
  default: '',
};

export {
  headerKeys,
  headerContentsEn,
  headerContentsKo,
};
