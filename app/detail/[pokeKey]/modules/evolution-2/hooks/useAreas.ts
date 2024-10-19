import { useLanguage } from '@/app/language-provider';
import { getAreaInfos } from '../utils/areaUtils';
import type { AreaKey, AreaObjItem } from '../types/area';

function checkAreaChainIndex(chainIndex: number) {
  const areaCase: Record<AreaKey, number[]> = {
    magneticField: [34, 122],
    mossyRock: [62],
    icyRock: [62],
    mountLanakila: [265],
  };

  const areas = Object.keys(areaCase) as Array<keyof typeof areaCase>;

  return areas.filter((area) => areaCase[area].includes(chainIndex));
}

export default function useAreas(chainIndex: number) {
  const { language } = useLanguage();

  const areaCase = checkAreaChainIndex(chainIndex);

  if (areaCase.length === 0) {
    return {
      areas: [],
    };
  }

  const areaInfos = getAreaInfos(areaCase);

  const localeAreaInfos: AreaObjItem[] = areaInfos.map(({
    areaInfosEn,
    areaInfosKo,
    titleEn,
    titleKo,
    key,
  }) => {
    if (language === 'en') {
      return {
        key,
        title: titleEn,
        areaInfos: areaInfosEn,
      };
    }

    return {
      key,
      title: titleKo,
      areaInfos: areaInfosKo,
    };
  });

  return {
    areas: localeAreaInfos,
  };
}
