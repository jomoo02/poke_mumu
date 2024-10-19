import { useLanguage } from '@/app/language-provider';
import { sortConditionByLanguage } from '../utils/conditionUtils';
import type { Affix, ConditionItem } from '../types/condition';

export function useSortCondition(condition: ConditionItem[]) {
  const { language } = useLanguage();

  const sortedCondition = sortConditionByLanguage(condition, language);

  return {
    sortedCondition,
  };
}

export function useConditionInfoLocaleAffix(affix: { en?: Affix, ko?: Affix }) {
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
