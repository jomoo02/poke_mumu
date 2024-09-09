import { useLanguage } from '@/app/language-provider';
import { getMethodMoveLocaleTitle } from '../utils/methodUtils';

export default function useMethodMovesTitle(method) {
  const { language } = useLanguage();

  const localeTitle = getMethodMoveLocaleTitle(method, language);

  return {
    title: localeTitle,
  };
}
