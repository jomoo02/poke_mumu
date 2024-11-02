import { useLanguage } from '@/app/language-provider';
import { localizedStats } from '@/app/data/stats';
import type { StatItem } from '@/app/models/poke.type';

export function useTotalStat(statItems: StatItem[]) {
  const { language } = useLanguage();

  const totalStatValue = statItems.reduce((total, { value }) => total + value, 0);

  const totalStat = language === 'en' ? 'total' : '합계';

  return {
    statType: totalStat,
    statValue: totalStatValue,
  };
}

export function useBasicStat(statItem: StatItem) {
  const {
    stat,
    value,
  } = statItem;

  const { language } = useLanguage();

  const localeStatType = localizedStats[language];

  return {
    statType: localeStatType[stat],
    statValue: value,
  };
}
