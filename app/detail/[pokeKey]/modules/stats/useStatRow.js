import { useLanguage } from '@/app/language-provider';
import { statKo, statEn } from '@/app/translations/stat';

export default function useStatRow(statObj) {
  const {
    stat,
    value,
    effortValue,
  } = statObj;

  const { language } = useLanguage();

  const localeStat = language === 'ko'
    ? statKo[stat]
    : statEn[stat];

  const isShowBar = stat !== 'total';

  return {
    isShowBar,
    statType: localeStat,
    statValue: value,
    effortStatValue: effortValue,
  };
}
