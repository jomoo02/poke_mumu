import { useLanguage } from '@/app/language-provider';
import {
  growthRatesEn,
  growthRatesKo,
  expPointsAtLevel50,
  expPointsAtLevel100,
  defaultGrowthRate,
} from '../data/growthRate';

function getExpPointAtLevel50Info(growthRate) {
  const expPoint = expPointsAtLevel50[growthRate]
  || expPointsAtLevel100[defaultGrowthRate];

  const expText = 'Lv.1 -> Lv.50';

  return {
    text: expText,
    content: expPoint.toLocaleString(),
  };
}

function getExpPointAtLevel100Info(growthRate) {
  const expPoint = expPointsAtLevel100[growthRate]
    || expPointsAtLevel100[defaultGrowthRate];

  const expText = 'Lv.1 -> Lv.100';

  return {
    text: expText,
    content: expPoint.toLocaleString(),
  };
}

export default function useGrowthRate(growthRate) {
  const { language } = useLanguage();

  const subjects = {
    en: 'Growth',
    ko: '성장',
  };

  const localeSubject = subjects[language] || subjects.ko;

  const localeGrowthRateMap = language === 'en' ? growthRatesEn : growthRatesKo;

  const localeGrowthRate = localeGrowthRateMap[growthRate]
    || localeGrowthRateMap[defaultGrowthRate];

  const expPointAtLevel50 = getExpPointAtLevel50Info(growthRate);

  const expPointAtLevel100 = getExpPointAtLevel100Info(growthRate);

  return {
    expPointAtLevel50,
    expPointAtLevel100,
    subject: localeSubject,
    growthRate: localeGrowthRate,
  };
}
