import { useLanguage } from '@/app/language-provider';
import { sortConditionByLanguage } from '../utils/conditionUtils';

export function useSortCondition(condition) {
  const { language } = useLanguage();

  const sortedCondition = sortConditionByLanguage(condition, language);

  return {
    sortedCondition,
  };
}

export function useConditionInfoLocaleAffix(affix) {
  const defaultAffix = {
    prefix: '',
    suffix: '',
  };

  const { language } = useLanguage();

  const { prefix, suffix } = affix[language] || defaultAffix;

  return {
    prefix,
    suffix,
  };
}
