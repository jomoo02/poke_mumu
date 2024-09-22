import { useLanguage } from '@/app/language-provider';

export default function useForm(form) {
  const { language } = useLanguage();

  const subjectEn = 'Form';
  const subjectKo = '모습';

  const localeSubject = language === 'en' ? subjectEn : subjectKo;

  const localeForm = form[language] || form.ko || '기본 모습';

  return {
    subject: localeSubject,
    form: localeForm,
  };
}
