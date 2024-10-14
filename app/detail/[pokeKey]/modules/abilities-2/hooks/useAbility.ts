import { useLanguage } from '@/app/language-provider';
import type { LanguageContent } from '@/app/types/languageContent.type';
import type { AbilityItem } from '../types/abilities.type';

export default function useAbility({
  name,
  flavorText,
  isHidden,
}: AbilityItem) {
  const { language } = useLanguage();

  const languageHiddenAbilityLabel: LanguageContent = {
    ko: '숨겨진 특성',
    en: 'hidden ability',
  };

  const localeName = name[language];
  const localeFlavorText = flavorText[language];
  const backGroundColor = isHidden ? 'bg-slate-200' : 'bg-white';
  const localeHiddenAbilityLabel = languageHiddenAbilityLabel[language];

  return {
    backGroundColor,
    name: localeName,
    flavorText: localeFlavorText,
    hiddenAbilityLabel: localeHiddenAbilityLabel,
  };
}
