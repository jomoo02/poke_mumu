import {
  areas,
  magneticFields,
  icyRocks,
  mossyRocks,
} from '../area';

function getMagneticFieldAreas() {
  const key = 'magnetic';

  return {
    key,
    areaInfo: magneticFields,
    title: areas.magneticField,
  };
}

function getMossyRockAreas() {
  const key = 'mossy';

  return {
    key,
    areaInfo: mossyRocks,
    title: areas.mossyRock,
  };
}

function getIcyRockAreas() {
  const key = 'icy';

  return {
    key,
    areaInfo: icyRocks,
    title: areas.icyRock,
  };
}

function getAlolaMagneticFiledArea() {
  const key = 'alola-magnetic';

  const alolaMagneticFiled = {
    ko: magneticFields.ko.filter(({ region }) => region === '알로라'),
    en: magneticFields.en.filter(({ region }) => region === 'Alola'),
  };

  return {
    key,
    areaInfo: alolaMagneticFiled,
    title: areas.magneticField,
  };
}

export function getLocationInfos(chainIndex) {
  const magneticFiledCase = {
    indexes: [34, 123],
    areaInfo: getMagneticFieldAreas(),
  };

  const mossyRockCase = {
    indexes: [62],
    areaInfo: getMossyRockAreas(),
  };

  const icyRockCase = {
    indexes: [62],
    areaInfo: getIcyRockAreas(),
  };

  const alolaMagneticFiledCase = {
    indexes: [265],
    areaInfo: getAlolaMagneticFiledArea(),
  };

  const totalCase = [
    magneticFiledCase,
    mossyRockCase,
    icyRockCase,
    alolaMagneticFiledCase,
  ];

  const areaInfos = [];

  totalCase.forEach(({ indexes, areaInfo }) => {
    if (indexes.includes(chainIndex)) {
      areaInfos.push(areaInfo);
    }
  });

  return areaInfos;
}
