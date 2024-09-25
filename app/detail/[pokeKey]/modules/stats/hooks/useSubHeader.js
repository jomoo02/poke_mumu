import { useLanguage } from '@/app/language-provider';

export default function useSubHeader() {
  const subHeaderTexts = {
    ko: {
      baseText: '종족값',
      effortText: '노력치',
    },
    en: {
      baseText: 'base stat',
      effortText: 'effort',
    },
  };

  const { language } = useLanguage();

  const localeHeaderTexts = subHeaderTexts[language] || subHeaderTexts.ko;

  const {
    baseText,
    effortText,
  } = localeHeaderTexts;

  return {
    baseText,
    effortText,
  };
}
