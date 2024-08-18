import { useLanguage } from '@/app/language-provider';
import { getLocaleTitleObjByMethod } from '../utils/method-moves-title';

export default function useMethodMovesTitle(method) {
  const { language } = useLanguage();

  const localeTitle = getLocaleTitleObjByMethod(method);

  const title = localeTitle[language] || localeTitle.ko;

  return { title };
}
