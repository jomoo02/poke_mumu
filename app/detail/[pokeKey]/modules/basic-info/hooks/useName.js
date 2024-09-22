import { useLanguage } from '@/app/language-provider';

export default function useName(name) {
  const { language } = useLanguage();

  const subjectEn = 'Name';
  const subjectKo = '이름';

  const localeSubject = language === 'en' ? subjectEn : subjectKo;

  const localeName = name[language] || name.ko || '포켓몬';

  return {
    subject: localeSubject,
    name: localeName,
  };
}
