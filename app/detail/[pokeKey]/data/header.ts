import { HeaderKey } from './header.type';

const abilities: string = 'abilities';
const information = 'information';
const defenseCompatibility = 'defenseCompatibility';
const evolution = 'evolution';
const forms = 'forms';
const moves = 'moves';
const stats = 'stats';

const headerKeys: Record<HeaderKey, string> = {
  abilities: 'abilities',
  information: 'information',
  defenseCompatibility: 'defenseCompatibility',
  evolution: 'evolution',
  forms: 'forms',
  moves: 'moves',
  stats: 'stats',
};

const headerContentsKo: Record<HeaderKey | 'default', string> = {
  abilities: '특성',
  information: '포켓몬 정보',
  defenseCompatibility: '방어 상성',
  evolution: '진화',
  forms: '모습',
  moves: '기술',
  stats: '스탯',
  default: '',
};

const headerContentsEn = {
  [abilities]: 'ability',
  [information]: 'poké Information',
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
