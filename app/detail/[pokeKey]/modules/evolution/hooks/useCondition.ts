import { useLanguage } from '@/app/language-provider';
import { sortConditionByLanguage } from '../utils/conditionUtils';
import { AffixType } from '../types/condition.type';

export function useSortCondition(condition: { key: string, value: number }[]) {
  const { language } = useLanguage();

  const sortedCondition = sortConditionByLanguage(condition, language);

  return {
    sortedCondition,
  };
}

export function useConditionInfoLocaleAffix(affix: { en: AffixType, ko: AffixType }) {
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
