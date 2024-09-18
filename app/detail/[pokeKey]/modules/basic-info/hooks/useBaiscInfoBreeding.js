import { useLanguage } from '@/app/language-provider';

export default function useBasicInfoBreeding() {
  const { language } = useLanguage();

  const titleEn = 'Breeding';

  const titleKo = '유전 정보';

  const localeTitle = language === 'en' ? titleEn : titleKo;

  return {
    title: localeTitle,
  };
}
