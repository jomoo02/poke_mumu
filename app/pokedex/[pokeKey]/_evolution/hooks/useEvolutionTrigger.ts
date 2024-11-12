import { useLanguage } from '@/app/language-provider';
import type {
  ConditionItem,
  ConditionKey,
  TriggerKey,
} from '@/app/models/chain.type';
import {
  localizedTriggerContents,
} from '../data/evolutionTrigger';

export default function useEvolutionTrigger<C extends ConditionKey>(
  trigger: TriggerKey,
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
