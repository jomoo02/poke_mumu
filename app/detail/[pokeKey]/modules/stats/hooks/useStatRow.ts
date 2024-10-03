import { useLanguage } from '@/app/language-provider';
import {
  statKo,
  statEn,
  totalEn,
  totalKo,
} from '@/app/translations/stat';
import { StatObjType, StatType } from '../types/stat.type';
import { sumStats } from '../utils/statUtils';

export function useTotalStat(baseStats: StatType[], effortStats: StatType[]) {
  const { language } = useLanguage();

  const totalStat = sumStats(baseStats);

  const totalEffort = sumStats(effortStats);

  const statType = language === 'en' ? totalEn : totalKo;

  return {
    statType,
    statValue: totalStat,
    effortStatValue: totalEffort,
  };
}

export function useStatRow(statObj: StatObjType) {
  const {
    stat,
    value,
    effortValue,
  } = statObj;

  const { language } = useLanguage();

  const localeStat = language === 'ko'
    ? statKo[stat]
    : statEn[stat];

  return {
    statType: localeStat,
    statValue: value,
    effortStatValue: effortValue,
  };
}
