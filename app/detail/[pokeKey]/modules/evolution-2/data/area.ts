import {
  magneticFieldsKo,
  magneticFieldsEn,
} from './areaMagneticFields';
import {
  mossyRocksKo,
  mossyRocksEn,
} from './areaMossyRock';
import {
  icyRocksEn,
  icyRocksKo,
} from './areaIcyRock';
import type { AreaKey } from '../types/area';

const areasKo: Record<AreaKey, string> = {
  mossyRock: '이끼 낀 바위 근처',
  icyRock: '얼음 바위 근처',
  magneticField: '자기장 영역',
  mountLanakila: '라나키라마운틴',
};

const areasEn: Record<AreaKey, string> = {
  mossyRock: 'Mossy Rock',
  icyRock: 'Icy Rock',
  magneticField: 'Magnetic Field',
  mountLanakila: 'Mount Lanakila',
};

const areasKey: Record<AreaKey, string> = {
  mossyRock: 'mossy-rock',
  icyRock: 'icy-rock',
  magneticField: 'magnetic-field',
  mountLanakila: 'mount-lanakila',
};

export {
  areasKo,
  areasEn,
  areasKey,
  magneticFieldsKo,
  magneticFieldsEn,
  mossyRocksKo,
  mossyRocksEn,
  icyRocksEn,
  icyRocksKo,
};
