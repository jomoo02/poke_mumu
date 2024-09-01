import { useLanguage } from '@/app/language-provider';

function getHiddenAbilityInfo(language) {
  const hiddenAbilityLabels = {
    ko: '숨겨진 특성',
    en: 'hidden ability',
  };

  const localeHiddenAbilityLabel = hiddenAbilityLabels[language] || hiddenAbilityLabels.ko;

  const hiddenAbilityBackGroundColor = 'bg-slate-100';

  return {
    hiddenAbilityBackGroundColor,
    localeHiddenAbilityLabel: `(${localeHiddenAbilityLabel})`,
  };
}

export default function useAbility(ability) {
  const { name, flavorText, isHidden } = ability;

  const { language } = useLanguage();

  const localeName = name[language] || name.ko || '특성';

  const localeFlavorText = flavorText[language] || flavorText.ko || '';

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
