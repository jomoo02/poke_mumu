import { useLanguage } from '@/app/language-provider';
import {
  genderTextsKo,
  genderTextsEn,
  subjectEn,
  subjectKo,
} from '../data/genderRate';
import { checkGenderless } from '../utils/gender';

function calculateGenderRate(genderRate) {
  const femaleRate = 12.5;

  const femaleValue = genderRate * femaleRate;

  const maleValue = 100 - femaleValue;

  return {
    maleValue,
    femaleValue,
  };
}

export default function useGenderRate(genderRate) {
  const { language } = useLanguage();

  const localeGenderTexts = language === 'en' ? genderTextsEn : genderTextsKo;

  const localeGenderRateSubject = language === 'en' ? subjectEn : subjectKo;

  const genderless = {
    text: localeGenderTexts.genderLess,
    value: false,
  };

  const male = {
    text: localeGenderTexts.male,
    value: 0,
  };

  const female = {
    text: localeGenderTexts.female,
    value: 0,
  };

  if (checkGenderless(genderRate)) {
    return {
      male,
      female,
      genderless: {
        ...genderless,
        value: true,
      },
      subject: localeGenderRateSubject,
    };
  }

  const {
    maleValue,
    femaleValue,
  } = calculateGenderRate(genderRate);

  return {
    genderless,
    male: {
      ...male,
      value: maleValue,
    },
    female: {
      ...female,
      value: femaleValue,
    },
    subject: localeGenderRateSubject,
  };
}
