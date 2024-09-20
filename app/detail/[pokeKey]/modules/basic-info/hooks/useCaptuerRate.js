import { useLanguage } from '@/app/language-provider';

export default function useCaptureRate(captureRate) {
  const { language } = useLanguage();

  const subjects = {
    en: 'Catch rate',
    ko: '포획률',
  };

  const localeSubject = subjects[language] || subjects.ko;

  return {
    captureRate,
    subject: localeSubject,
  };
}
