import { useLanguage } from '@/app/language-provider';
import { getLocationInfos } from '../utils/area';

export default function useAreaInfos(chainIndex) {
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
    areaInfos: localeAreaInfos,
  };
}
