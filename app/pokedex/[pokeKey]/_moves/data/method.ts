export type Method =
  'level'
  | 'pre'
  | 'egg'
  | 'tutor'
  | 'reminder'
  | 'hm'
  | 'tm'
  | 'tr';

type MethodTitles = Record<Method, string>;

const methodMoveTitlesKo: MethodTitles = {
  level: '레벌 업으로 익히는 기술',
  egg: '교배를 통해 유전 받을 수 있는 기술',
  tutor: 'NPC로부터 배울 수 있는 기술',
  reminder: '떠올리기로 익히는 기술',
  pre: '이전 진화에서만 얻을 수 있는 기술',
  hm: '기술머신 HM으로 익히는 기술',
  tm: '기술머신 TM으로 익히는 기술',
  tr: '기술머신 TR로 익히는 기술',
};

const methodMoveTitlesEn: MethodTitles = {
  level: 'moves learnt by level up',
  egg: 'egg moves',
  tutor: 'move Tutor moves',
  reminder: 'moves learnt by reminder',
  pre: 'pre-evolution moves',
  hm: 'moves learnt by HM',
  tm: 'moves learnt by TM',
  tr: 'moves learnt by TR',
};

const localizedMethodMoveTitles: Record<'en' | 'ko', MethodTitles> = {
  en: methodMoveTitlesEn,
  ko: methodMoveTitlesKo,
};

export {
  localizedMethodMoveTitles,
};
