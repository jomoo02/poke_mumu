import { useLanguage } from '@/app/language-provider';
import {
  headerContentsKo,
  headerContentsEn,
} from '../data/header';
import { HeaderKeyType } from '../data/header.typs';

export default function useHeader(headerKey: HeaderKeyType) {
  const { language } = useLanguage();

  const headerContents = language === 'en' ? headerContentsEn : headerContentsKo;

  const headerKeyContent = headerContents[headerKey] || headerContents.default;

  return {
    headerContent: headerKeyContent,
  };
}
