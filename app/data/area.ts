type AreaType =
  'mossyRock'
  | 'icyRock'
  | 'magneticField'
  | 'mountLanakila';

type Area =
  'mossyRock'
  | 'icyRock'
  | 'magneticField'
  | 'mountLanakila';

type AreaInfoItem = {
  region: string;
  area: string;
};

type AreaObjItem = {
  title: string;
  areaInfos: AreaInfoItem[];
  key: string;
};

export type {
  AreaType,
  Area,
  AreaInfoItem,
  AreaObjItem,
};
