import { useLanguage } from '@/app/language-provider';
import { formatMeasurement } from '@/app/utils/format';
import { localizedSubjects } from '../data/subject';
import {
  growthRatesEn,
  growthRatesKo,
  expPointsAtLevel50,
  expPointsAtLevel100,
  defaultGrowthRate,
} from '../data/growthRate';

function setGenera(genera, localeSubjects, language) {
  const localeSubject = localeSubjects.genera || '분류';

  const localeGenera = genera[language] || genera.ko || '포켓몬';

  return {
    subject: localeSubject,
    content: localeGenera,
  };
}

function setHeight(height, localeSubjects) {
  const unit = 'm';

  const localeSubject = localeSubjects.height || '신장';

  const formattedHeight = formatMeasurement(height, unit);

  return {
    subject: localeSubject,
    content: formattedHeight,
  };
}

function setWeight(weight, localeSubjects) {
  const unit = 'kg';

  const localeSubject = localeSubjects.weight || '체중';

  const formattedWeight = formatMeasurement(weight, unit);

  return {
    subject: localeSubject,
    content: formattedWeight,
  };
}

function setCaptureRate(captureRate, localeSubjects) {
  const localeSubject = localeSubjects.captureRate || '포획률';

  return {
    subject: localeSubject,
    content: captureRate,
  };
}

function setGrowthRate(growthRate, localeSubjects, localeGrowthRateMap) {
  const localeSubject = localeSubjects.growthRate || '성장';

  const localeGrowthRate = localeGrowthRateMap[growthRate]
    || localeGrowthRateMap[defaultGrowthRate];

  const expPointAtLevel50 = expPointsAtLevel50[growthRate]
    || expPointsAtLevel50[defaultGrowthRate];

  const atLevel50 = {
    text: 'Lv.1 -> Lv.50',
    value: expPointAtLevel50,
  };

  const expPointAtLevel100 = expPointsAtLevel100[growthRate]
    || expPointsAtLevel100[defaultGrowthRate];

  const atLevel100 = {
    text: 'Lv.1 -> Lv.100',
    value: expPointAtLevel100,
  };

  return {
    subject: localeSubject,
    content: {
      atLevel50,
      atLevel100,
      growthRate: localeGrowthRate,
    },
  };
}

export default function useInformationDetail(pokeInformation) {
  const { language } = useLanguage();

  const titles = {
    en: 'Detail',
    ko: '세부 정보',
  };

  const localeTitle = titles[language] || titles.ko;

  const {
    genera,
    height,
    weight,
    captureRate,
    growthRate,
  } = pokeInformation;

  const localeSubjects = localizedSubjects[language] || localizedSubjects.ko;

  const localeGrowthRateMap = language === 'en' ? growthRatesEn : growthRatesKo;

  const generaObj = setGenera(genera, localeSubjects, language);
  const heightObjt = setHeight(height, localeSubjects);
  const weightObj = setWeight(weight, localeSubjects);
  const captureRateObj = setCaptureRate(captureRate, localeSubjects);
  const growthRateObj = setGrowthRate(growthRate, localeSubjects, localeGrowthRateMap);

  return {
    title: localeTitle,
    genera: generaObj,
    height: heightObjt,
    weight: weightObj,
    captureRate: captureRateObj,
    growthRate: growthRateObj,
  };
}
