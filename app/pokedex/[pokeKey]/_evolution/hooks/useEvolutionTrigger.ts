import { useLanguage } from '@/app/language-provider';
import {
  localizedTriggerContents,
  type Trigger,
} from '../data/evolutionTrigger';
import type { ConditionItem, ConditionKey } from '../data/condition';

export default function useEvolutionTrigger<C extends ConditionKey>(
  trigger: Trigger,
  condition: ConditionItem<C>[],
) {
  const { language } = useLanguage();

  const localeTriggerContent = localizedTriggerContents[language];

  const triggerContent = (() => {
    if (trigger === 'level-up' && !condition.find(({ key }) => key === 'min_level')) {
      return localeTriggerContent['level-up'];
    } if (trigger === 'use-item') {
      return localeTriggerContent['use-item'];
    } if (trigger === 'trade') {
      return localeTriggerContent.trade;
    }
    return '';
  })();

  return {
    triggerContent,
  };
}
