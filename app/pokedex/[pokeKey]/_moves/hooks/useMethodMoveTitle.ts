import { useLanguage } from '@/app/language-provider';
import {
  localizedMethodMoveTitles,
  type Method,
} from '../data/method';

export default function useMethodMoveTitle(method: Method) {
  const { language } = useLanguage();

  const defaultTitle = 'move';

  const localeTitles = localizedMethodMoveTitles[language];

  const localeMethodTitle = localeTitles[method] || defaultTitle;

  return {
    title: localeMethodTitle,
  };
}
