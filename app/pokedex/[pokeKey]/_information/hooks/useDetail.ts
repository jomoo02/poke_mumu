import { Language, useLanguage } from '@/app/language-provider';
import { formatMeasurement } from '@/app/utils/format';
import {
  localizedGrowthRates,
  expPointsAtLevel50,
  expPointsAtLevel100,
  defaultGrowthRate,
  type GrowthRate,
} from '@/app/data/growthRate';
import { PokeDetail } from '@/app/models/Detail';
import { localizedSubjects } from '../data/subject';

function setGrowthRate(language: Language, growthRate: GrowthRate = defaultGrowthRate) {
  const localeGrowhRates = localizedGrowthRates[language][growthRate];

  const expPointAt50 = expPointsAtLevel50[growthRate];
  const expPointAt100 = expPointsAtLevel100[growthRate];

  return {
    atLevel50: {
      text: 'Lv.1 -> Lv.50',
      value: expPointAt50.toLocaleString(),
    },
    atLevel100: {
      text: 'Lv.1 -> Lv.100',
      value: expPointAt100.toLocaleString(),
    },
    growthRate: localeGrowhRates,
  };
}

export default function useDetail(pokeDetail: PokeDetail) {
  const { language } = useLanguage();

  const title = language === 'en' ? 'Detail' : '세부 정보';

  const localeSubjects = localizedSubjects[language];

  const {
    genera,
    height,
    weight,
    captureRate,
    growthRate,
    effortStats,
  } = pokeDetail.detail;

  const localeGenera = genera[language];

  const localeGrowthRate = setGrowthRate(language, growthRate);

  return {
    title,
    genera: {
      subject: localeSubjects.genera,
      content: localeGenera,
    },
    height: {
      subject: localeSubjects.height,
      content: formatMeasurement(height, 'm'),
    },
    weight: {
      subject: localeSubjects.weight,
      content: formatMeasurement(weight, 'kg'),
    },
    captureRate: {
      subject: localeSubjects.captureRate,
      content: captureRate,
    },
    growthRate: {
      subject: localeSubjects.growthRate,
      content: localeGrowthRate,
    },
    effortStats: {
      subject: localeSubjects.effortStats,
      content: effortStats,
    },
  };
}
