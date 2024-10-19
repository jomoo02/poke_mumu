type AreaKey =
  'mossyRock'
  | 'icyRock'
  | 'magneticField'
  | 'mountLanakila';

interface AreaInfoItem {
  region: string,
  area: string,
}

interface AreaObjItem {
  title: string,
  areaInfos: AreaInfoItem[],
  key: string,
}

export type {
  AreaKey,
  AreaInfoItem,
  AreaObjItem,
};
