const level = 'level';

const pre = 'pre';

const egg = 'egg';

const tutor = 'tutor';

const remidner = 'reminder';

const hm = 'hm';

const tm = 'tm';

const tr = 'tr';

const methods = {
  level,
  pre,
  egg,
  tutor,
  remidner,
  hm,
  tm,
  tr,
};

const methodMoveTitlesKo = {
  [level]: '레벌 업으로 익히는 기술',
  [egg]: '교배를 통해 유전 받을 수 있는 기술',
  [tutor]: 'NPC로부터 배울 수 있는 기술',
  [remidner]: '떠올리기로 익히는 기술',
  [pre]: '이전 진화에서만 얻을 수 있는 기술',
  [hm]: '기술머신 HM 으로 익히는 기술',
  [tm]: '기술머신 TM 으로 익히는 기술',
  [tr]: '기술머신 TR 으로 익히는 기술',
};

const methodMoveTitlesEn = {
  [level]: 'moves learnt by level up',
  [egg]: 'egg moves',
  [tutor]: 'move Tutor moves',
  [remidner]: 'moves learnt by reminder',
  [pre]: 'pre-evolution moves',
  [hm]: 'moves learnt by HM',
  [tm]: 'moves learnt by TM',
  [tr]: 'moves learnt by TR',
};

export {
  methods,
  methodMoveTitlesKo,
  methodMoveTitlesEn,
};
