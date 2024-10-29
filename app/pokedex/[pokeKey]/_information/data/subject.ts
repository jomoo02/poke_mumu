export type Subject =
  'nationalNo'
  | 'name'
  | 'types'
  | 'form'
  | 'localeNo'
  | 'height'
  | 'weight'
  | 'genera'
  | 'captureRate'
  | 'growthRate'
  | 'eggGroups'
  | 'genderRate'
  | 'hatchCounter'
  | 'effortStats';

const subjectsKo: Record<Subject, string> = {
  nationalNo: '전국도감 번호',
  name: '이름',
  types: '타입',
  form: '모습',
  localeNo: '도감 번호',
  height: '신장',
  weight: '체중',
  genera: '분류',
  captureRate: '포획률',
  growthRate: '성장',
  eggGroups: '알 그룹',
  genderRate: '성비',
  hatchCounter: '부화 카운트',
  effortStats: '노력치',
};

const subjectsEn: Record<Subject, string> = {
  nationalNo: 'national No',
  name: 'name',
  types: 'type',
  form: 'form',
  localeNo: 'locale No',
  height: 'height',
  weight: 'weight',
  genera: 'species',
  captureRate: 'catch Rate',
  growthRate: 'growth',
  eggGroups: 'egg Groups',
  genderRate: 'gender',
  hatchCounter: 'egg Cycles',
  effortStats: 'EV yield',
};

type LocalizedSubjects = Record<'ko' | 'en', Record<Subject, string>>;

const localizedSubjects: LocalizedSubjects = {
  ko: subjectsKo,
  en: subjectsEn,
};

export {
  subjectsKo,
  subjectsEn,
  localizedSubjects,
};
