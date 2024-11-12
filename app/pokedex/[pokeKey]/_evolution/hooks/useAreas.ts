import { useLanguage } from '@/app/language-provider';
import {
  localizedAreas,
  type Area,
  type AreaInfoItem,
} from '@/app/data/area';
import { localizedIcyRocks } from '@/app/data/areaIcyRock';
import { localizedMagneticFileds } from '@/app/data/areaMagneticFields';
import { localizedMossyRocks } from '@/app/data/areaMossyRock';

function checkAreaChainIndex(chainIndex: number) {
  const areaChainIndexCase: Record<Area, number[]> = {
    magneticField: [34, 123],
    mossyRock: [62],
    icyRock: [62],
    mountLanakila: [265],
  };

  const areas: Area[] = [
    'magneticField',
    'mossyRock',
    'icyRock',
    'mountLanakila',
  ];

  return areas.filter((area) => (
    areaChainIndexCase[area].includes(chainIndex)
  ));
}

export default function useAreas(chainIndex: number) {
  const { language } = useLanguage();

  const areas = checkAreaChainIndex(chainIndex);

  if (areas.length === 0) {
    return {
      areaInfoList: [],
    };
  }

  const localeMossyRocks = localizedMossyRocks[language];
  const localeIcyRocks = localizedIcyRocks[language];
  const localeMagneticFileds = localizedMagneticFileds[language];
  const localeAreas = localizedAreas[language];

  const areaInfoMap: Record<Area, AreaInfoItem> = {
    magneticField: {
      key: 'magneticFiled',
      title: localeAreas.magneticField,
      areaInfo: localeMagneticFileds,
    },
    mossyRock: {
      key: 'mossyRock',
      title: localeAreas.mossyRock,
      areaInfo: localeMossyRocks,
    },
    icyRock: {
      key: 'icyRock',
      title: localeAreas.icyRock,
      areaInfo: localeIcyRocks,
    },
    mountLanakila: {
      key: 'mountLanakila',
      title: localeAreas.mountLanakila,
      areaInfo: localeMagneticFileds.filter(({ region }) => region === 'Alola' || region === '알로라'),
    },
  };

  const localeAreaInfo = areas.map((area) => areaInfoMap[area]);

  return {
    areaInfoList: localeAreaInfo,
  };
}
