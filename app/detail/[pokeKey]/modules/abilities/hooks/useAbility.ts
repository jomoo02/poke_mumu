import { useLanguage, Language } from '@/app/language-provider';
import { AbilityType } from '../types/ability';

function getHiddenAbilityInfo(language: Language) {
  const hiddenAbilityLabels = {
    ko: '숨겨진 특성',
    en: 'hidden ability',
  };

  const localeHiddenAbilityLabel = `(${hiddenAbilityLabels[language]})`;

  const hiddenAbilityBackGroundColor = 'bg-slate-100';

  return {
    hiddenAbilityBackGroundColor,
    localeHiddenAbilityLabel,
  };
}

export default function useAbility(ability: AbilityType) {
  const { name, flavorText, isHidden } = ability;

  const { language } = useLanguage();

  const localeName = name[language];

  const localeFlavorText = flavorText[language];

  const abilityBackGroundColor = 'bg-white';

  const {
    localeHiddenAbilityLabel,
    hiddenAbilityBackGroundColor,
  } = getHiddenAbilityInfo(language);

  const backGroundColor = isHidden
    ? hiddenAbilityBackGroundColor
    : abilityBackGroundColor;

  const hiddenAbilityLabel = isHidden
    ? localeHiddenAbilityLabel
    : '';

  return {
    backGroundColor,
    hiddenAbilityLabel,
    name: localeName,
    flavorText: localeFlavorText,
  };
}
