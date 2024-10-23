import { useLanguage } from '@/app/language-provider';
import { headerItemEn, headerItemKo } from '../data/listHeader';

export default function useListHeader() {
  const { language } = useLanguage();

  const headerItem = language === 'en' ? headerItemEn : headerItemKo;

  const {
    name,
    type,
    total,
    hp,
    attack,
    defense,
    speed,
    'special-attack': specialAttack,
    'special-defense': specialDefense,
  } = headerItem;

  return {
    name,
    type,
    total,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
  };
}
