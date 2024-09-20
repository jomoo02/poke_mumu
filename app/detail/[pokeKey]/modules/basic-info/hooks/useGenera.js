import { useLanguage } from '@/app/language-provider';

export default function useGenera(genera) {
  const { language } = useLanguage();

  const localeGenera = language === 'en' ? genera.en : genera.ko;

  const subjects = {
    en: 'Species',
    ko: '분류',
  };

  const localeSubject = subjects[language] || subjects.ko;

  return {
    genera: localeGenera,
    subject: localeSubject,
  };
}
