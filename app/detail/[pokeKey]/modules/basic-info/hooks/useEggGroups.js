import { useLanguage } from '@/app/language-provider';
import {
  noEggs,
  eggGroupsKo,
  eggGroupsEn,
  subjectEn,
  subjectKo,
} from '../data/eggGroups';
import { checkNoEggs } from '../utils/eggGroups';

export default function useEggGroups(eggGroups) {
  const { language } = useLanguage();

  const localeSubject = language === 'en' ? subjectEn : subjectKo;

  const localeEggGroups = language === 'en' ? eggGroupsEn : eggGroupsKo;

  if (checkNoEggs(eggGroups)) {
    return {
      subject: localeSubject,
      eggGroups: [localeEggGroups[noEggs]],
    };
  }

  const pokeEggGroups = eggGroups.map((eggGroup) => {
    const localeEggGroup = localeEggGroups[eggGroup] || localeEggGroups[noEggs];
    return localeEggGroup;
  });

  return {
    subject: localeSubject,
    eggGroups: pokeEggGroups,
  };
}
