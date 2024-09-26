import { useLanguage } from '@/app/language-provider';
import { localizedSubjects } from '../data/subject';
import {
  noEggs,
  eggGroupsKo,
  eggGroupsEn,
} from '../data/eggGroups';
import {
  genderTextsKo,
  genderTextsEn,
} from '../data/genderRate';
import { checkGenderless } from '../utils/gender';
import { checkNoEggs } from '../utils/eggGroups';

function setGenderRate(genderRate, localeSubjects, localeGenderTextsMap) {
  const localeSubject = localeSubjects.genderRate || 'gender';

  const genderless = {
    text: localeGenderTextsMap.genderless,
    value: false,
  };

  const male = {
    text: localeGenderTextsMap.male,
    value: 0,
  };

  const female = {
    text: localeGenderTextsMap.female,
    value: 0,
  };

  if (checkGenderless(genderRate)) {
    return {
      subject: localeSubject,
      content: {
        male,
        female,
        genderless: {
          ...genderless,
          value: true,
        },
      },
    };
  }

  const femaleValue = genderRate * 12.5;
  const maleValue = 100 - femaleValue;

  return {
    subject: localeSubject,
    content: {
      genderless,
      male: {
        ...male,
        value: maleValue,
      },
      female: {
        ...female,
        value: femaleValue,
      },
    },
  };
}

function setEggGroups(eggGroups, localeSubjects, localeEggGroupsMap) {
  const localeSubject = localeSubjects.eggGroups || 'egg Groups';

  if (checkNoEggs(eggGroups)) {
    return {
      subject: localeSubject,
      content: [localeEggGroupsMap[noEggs]],
    };
  }

  const localeEggGroups = eggGroups.map((eggGroup) => (
    localeEggGroupsMap[eggGroup] || localeEggGroupsMap[noEggs]
  ));

  return {
    subject: localeSubject,
    content: localeEggGroups,
  };
}

function setHatchCounter(hatchCounter, localeSubjects, eggGroups) {
  const localeSubject = localeSubjects.hatchCounter || 'egg Cycles';

  // const formattedHatchCounter = checkNoEggs(eggGroups) ? 0 : hatchCounter;

  return {
    subject: localeSubject,
    content: hatchCounter,
  };
}

export default function useInformationBreeding(pokeInfo) {
  const {
    genderRate,
    eggGroups,
    hatchCounter,
  } = pokeInfo;

  const { language } = useLanguage();

  const titles = {
    en: 'Breeding',
    ko: '유전 정보',
  };

  const localeTitle = titles[language] || titles.ko;

  const localeSubjects = localizedSubjects[language] || localizedSubjects.ko;

  const localeEggGroupsMap = language === 'en' ? eggGroupsEn : eggGroupsKo;

  const localeGenderTextsMap = language === 'en' ? genderTextsEn : genderTextsKo;

  const genderRateObj = setGenderRate(genderRate, localeSubjects, localeGenderTextsMap);

  const eggGroupsObj = setEggGroups(eggGroups, localeSubjects, localeEggGroupsMap);

  const hatchCounterObj = setHatchCounter(hatchCounter, localeSubjects, eggGroups);

  return {
    title: localeTitle,
    genderRate: genderRateObj,
    eggGroups: eggGroupsObj,
    hatchCounter: hatchCounterObj,
  };
}
