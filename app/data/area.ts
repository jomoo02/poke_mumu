type Area =
  'mossyRock'
  | 'icyRock'
  | 'magneticField'
  | 'mountLanakila';

type RegionArea = {
  region: string;
  area: string;
};

type Areas = Record<Area, string>;

type AreaInfoItem = {
  title: string,
  areaInfo: RegionArea[],
  key: string,
};

const areasKo: Record<Area, string> = {
  mossyRock: '이끼 낀 바위 근처',
  icyRock: '얼음 바위 근처',
  magneticField: '자기장 영역',
  mountLanakila: '라나키라마운틴',
};

const areasEn: Areas = {
  mossyRock: 'Mossy Rock',
  icyRock: 'Icy Rock',
  magneticField: 'Magnetic Field',
  mountLanakila: 'Mount Lanakila',
};

const areasKey: Areas = {
  mossyRock: 'mossy-rock',
  icyRock: 'icy-rock',
  magneticField: 'magnetic-field',
  mountLanakila: 'mount-lanakila',
};

const localizedAreas: Record<'en' | 'ko', Areas> = {
  en: areasEn,
  ko: areasKo,
};

export {
  areasKey,
  localizedAreas,
};

export type {
  Area,
  RegionArea,
  AreaInfoItem,
};
