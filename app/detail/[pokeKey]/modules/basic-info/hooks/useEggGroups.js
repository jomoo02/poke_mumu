import { useLanguage } from '@/app/language-provider';
import {
  noEggs,
  eggGroupsKo,
  eggGroupsEn,
} from '../data/egg-groups';

export default function useEggGroups(eggGroups) {
  const { language } = useLanguage();

  const localeEggGroups = language === 'en' ? eggGroupsEn : eggGroupsKo;

  if (eggGroups.length === 0) {
    return [localeEggGroups[noEggs]];
  }

  const pokeEggGroups = eggGroups.map((eggGroup) => {
    const localeEggGroup = localeEggGroups[eggGroup] || localeEggGroups[noEggs];
    return localeEggGroup;
  });

  return pokeEggGroups;
}
