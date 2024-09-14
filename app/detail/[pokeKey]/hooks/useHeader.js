import { useLanguage } from '@/app/language-provider';
import {
  headerContentsKo,
  headerContentsEn,
} from '../data/header';

export default function useHeader(headerKey) {
  const { language } = useLanguage();

  const headerContents = language === 'en' ? headerContentsEn : headerContentsKo;

  const headerKeyContent = headerContents[headerKey] || headerContents.default;

  return {
    headerContent: headerKeyContent,
  };
}
