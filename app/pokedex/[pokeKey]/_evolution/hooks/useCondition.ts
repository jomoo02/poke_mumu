import { useLanguage } from '@/app/language-provider';
import type {
  ConditionKey,
  ConditionItem,
} from '@/app/models/chain.type';

function sortEnCondition(conditions: ConditionItem<ConditionKey>[]) {
  const generalConditions: ConditionItem<ConditionKey>[] = [];
  const lastConditions: ConditionItem<ConditionKey>[] = [];

  const lastConditionKeys = [
    'gender',
  ];

  conditions.forEach((condition) => {
    if (lastConditionKeys.includes(condition.key)) {
      lastConditions.push(condition);
    } else {
      generalConditions.push(condition);
    }
  });

  return [...generalConditions, ...lastConditions];
}

function sortKoCondition(conditions: ConditionItem<ConditionKey>[]) {
  const firstConditions: ConditionItem<ConditionKey>[] = [];
  const lastConditions: ConditionItem<ConditionKey>[] = [];
  const generalConditions: ConditionItem<ConditionKey>[] = [];

  const firstConditionKeys = [
    'time_of_day',
    'location',
  ];

  const lastConditionKeys = [
    'min_level',
  ];

  conditions.forEach((condition) => {
    if (firstConditionKeys.includes(condition.key)) {
      firstConditions.push(condition);
    } else if (lastConditionKeys.includes(condition.key)) {
      lastConditions.push(condition);
    } else {
      generalConditions.push(condition);
    }
  });

  return [...firstConditions, ...generalConditions, ...lastConditions];
}

export default function useCondition(condition: ConditionItem<ConditionKey>[]) {
  const { language } = useLanguage();

  const sortedCondition = language === 'en' ? sortEnCondition(condition) : sortKoCondition(condition);

  return {
    sortedCondition,
  };
}
