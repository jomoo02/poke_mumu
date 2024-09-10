import { useLanguage } from '@/app/language-provider';
import { getLocationInfos } from '../utils/areaUtils';

export default function useAreas(chainIndex) {
  const { language } = useLanguage();

  const areaInfos = getLocationInfos(chainIndex) || [];

  const localeAreaInfos = areaInfos.map((info) => {
    const { areaInfo, title } = info;

    return {
      ...info,
      areaInfo: areaInfo[language] || areaInfo.ko || 'area',
      title: title[language] || title.ko || 'area',
    };
  });

  return {
    areas: localeAreaInfos,
  };
}
