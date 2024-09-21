import { useLanguage } from '@/app/language-provider';

export default function useBasicInfoDetail() {
  const { language } = useLanguage();

  const titleEn = 'Detail';

  const titleKo = '세부 정보';

  const localeTitle = language === 'en' ? titleEn : titleKo;

  return {
    title: localeTitle,
  };
}
