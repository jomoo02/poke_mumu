import { useLanguage } from '@/app/language-provider';
import {
  headerContentsKo,
  headerContentsEn,
} from '../data/header';
import type { HeaderKey } from '../data/header';

export default function useHeader(headerKey: HeaderKey) {
  const { language } = useLanguage();

  const headerContents = language === 'en' ? headerContentsEn : headerContentsKo;

  const headerKeyContent = headerContents[headerKey] || headerContents.default;

  return {
    headerContent: headerKeyContent,
  };
}
