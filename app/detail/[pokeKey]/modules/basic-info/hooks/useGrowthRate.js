import { useLanguage } from '@/app/language-provider';

export default function useGrowthRate(growthRate) {
  const { language } = useLanguage();

  const subjects = {
    en: 'Growth',
    ko: '성장',
  };

  const localeSubject = subjects[language] || subjects.ko;

  const localeGrowthRate = growthRate;

  const maximumExperience = 10000;

  return {
    maximumExperience,
    subject: localeSubject,
    growthRate: localeGrowthRate,
  };
}
