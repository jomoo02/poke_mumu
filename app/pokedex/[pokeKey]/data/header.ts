const headerKeys = {
  abilities: 'abilities',
  information: 'information',
  defenseCompatibility: 'defenseCompatibility',
  evolution: 'evolution',
  forms: 'forms',
  moves: 'moves',
  stats: 'stats',
  default: 'default',
} as const;

export type HeaderKey = keyof typeof headerKeys;

const headerContentsKo: Record<HeaderKey, string> = {
  abilities: '특성',
  information: '포켓몬 정보',
  defenseCompatibility: '방어 상성',
  evolution: '진화',
  forms: '모습',
  moves: '기술',
  stats: '스탯',
  default: '',
};

const headerContentsEn: Record<HeaderKey, string> = {
  abilities: 'ability',
  information: 'poké Information',
  defenseCompatibility: 'defense Compatibility',
  evolution: 'Evolution Tree',
  forms: 'form',
  moves: 'moves',
  stats: 'stat',
  default: '',
};

export {
  headerKeys,
  headerContentsEn,
  headerContentsKo,
};
