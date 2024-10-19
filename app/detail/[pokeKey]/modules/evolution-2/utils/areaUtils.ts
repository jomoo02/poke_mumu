import {
  areasKo,
  areasEn,
  magneticFieldsKo,
  magneticFieldsEn,
  mossyRocksKo,
  mossyRocksEn,
  icyRocksEn,
  icyRocksKo,
} from '../data/area';
import type { AreaKey, AreaInfoItem } from '../types/area';

interface AreaDataMapValue {
  areaInfosEn: AreaInfoItem[],
  areaInfosKo: AreaInfoItem[],
  titleKo: string,
  titleEn: string,
  key: string,
}

const areaDataMap: Record<AreaKey, AreaDataMapValue> = {
  mossyRock: {
    areaInfosEn: mossyRocksEn,
    areaInfosKo: mossyRocksKo,
    titleEn: areasEn.mossyRock,
    titleKo: areasKo.mossyRock,
    key: 'mossyRock',
  },
  icyRock: {
    areaInfosEn: icyRocksEn,
    areaInfosKo: icyRocksKo,
    titleEn: areasEn.icyRock,
    titleKo: areasKo.icyRock,
    key: 'icyRock',
  },
  magneticField: {
    areaInfosEn: magneticFieldsEn,
    areaInfosKo: magneticFieldsKo,
    titleEn: areasEn.magneticField,
    titleKo: areasKo.magneticField,
    key: 'magneticField',
  },
  mountLanakila: {
    areaInfosEn: magneticFieldsEn.filter(({ region }) => region === 'Alola'),
    areaInfosKo: magneticFieldsKo.filter(({ region }) => region === '알로라'),
    titleEn: areasEn.magneticField,
    titleKo: areasKo.magneticField,
    key: 'mountLanakila',
  },
};

export function getAreaInfos(areas: AreaKey[]) {
  return areas.map((area) => areaDataMap[area]);
}
