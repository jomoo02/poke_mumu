import { Language, useLanguage } from '@/app/language-provider';
import type { PokeDetail } from '@/app/models/detail.type';
import {
  noEggs,
  localizedEggGroups,
  type EggGroup,
} from '@/app/data/eggGroup';
import { localizedSubjects } from '../data/subject';

function setGenderRate(genderRate: number, language: Language) {
  const genderTextsEn = {
    genderless: 'Genderless',
    male: 'Male',
    female: 'Female',
  };

  const genderTextsKo = {
    genderless: '무성',
    male: '수컷',
    female: '암컷',
  };

  const {
    genderless,
    male,
    female,
  } = language === 'ko' ? genderTextsKo : genderTextsEn;

  if (genderRate === -1) {
    return {
      male: {
        text: male,
        value: 0,
      },
      female: {
        text: female,
        value: 0,
      },
      genderless: {
        text: genderless,
        value: true,
      },
    };
  }

  const femaleValue = genderRate * 12.5;
  const maleValue = 100 - femaleValue;

  return {
    male: {
      text: male,
      value: maleValue,
    },
    female: {
      text: female,
      value: femaleValue,
    },
    genderless: {
      text: genderless,
      value: false,
    },
  };
}

function setEggGroups(eggGroups: EggGroup[], language: Language) {
  const localeEggGroups = localizedEggGroups[language];

  if (!eggGroups || eggGroups[0] === noEggs) {
    return [localeEggGroups[noEggs]];
  }

  return eggGroups.map((eggGroup) => localeEggGroups[eggGroup]);
}

export default function useBreeding(pokeDetail: PokeDetail) {
  const { language } = useLanguage();

  const title = language === 'en' ? 'Breeding' : '유전 정보';

  const {
    eggGroups,
    hatchCounter,
    genderRate,
  } = pokeDetail.breeding;

  const localeSubjects = localizedSubjects[language];

  const localeGenderRate = setGenderRate(genderRate, language);

  const localeEggGroups = setEggGroups(eggGroups, language);

  return {
    title,
    genderRate: {
      subject: localeSubjects.genderRate,
      content: localeGenderRate,
    },
    eggGroups: {
      subject: localeSubjects.eggGroups,
      content: localeEggGroups,
    },
    hatchCounter: {
      subject: localeSubjects.hatchCounter,
      content: hatchCounter,
    },
  };
}
