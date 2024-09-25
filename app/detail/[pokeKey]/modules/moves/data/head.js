const name = 'name';

const type = 'type';

const damageClass = 'damageClass';

const power = 'power';

const accuracy = 'accuracy';

const level = 'level';

const pre = 'pre';

const hm = 'hm';

const tm = 'tm';

const tr = 'tr';

const moveTableHeads = {
  name,
  type,
  damageClass,
  power,
  accuracy,
  level,
  pre,
  hm,
  tm,
  tr,
};

const moveTableHeadContentsEn = {
  name,
  type,
  power,
  [damageClass]: 'cat.',
  [accuracy]: 'acc.',
  [level]: 'Lv.',
  [hm]: 'HM',
  [tm]: 'TM',
  [tr]: 'TR',
  [pre]: 'Poke',
};

const moveTableHeadContentsKo = {
  [name]: '기술',
  [type]: '타입',
  [power]: '위력',
  [damageClass]: '분류',
  [accuracy]: '명중률',
  [level]: 'Lv.',
  [hm]: 'HM',
  [tm]: 'TM',
  [tr]: 'TR',
  [pre]: 'Poke',
};

export {
  moveTableHeads,
  moveTableHeadContentsEn,
  moveTableHeadContentsKo,
};
