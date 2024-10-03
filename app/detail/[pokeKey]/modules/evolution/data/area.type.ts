type AreaType =
  'mossyRock'
  | 'icyRock'
  | 'magneticField'
  | 'mountLanakila';

interface AreaInfoType {
  region: string,
  area: string,
}

interface AreaObjType {
  title: string,
  areaInfos: AreaInfoType[],
  key: string,
}

export type {
  AreaType,
  AreaInfoType,
  AreaObjType,
};
