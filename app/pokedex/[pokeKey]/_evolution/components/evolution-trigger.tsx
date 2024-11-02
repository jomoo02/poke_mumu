import React from 'react';
import type {
  ConditionItem,
  ConditionKey,
  TriggerKey,
} from '@/app/models/chain.type';
import useEvolutionTrigger from '../hooks/useEvolutionTrigger';

interface EvolutionTriggerProps<C extends ConditionKey> {
  trigger: TriggerKey;
  condition: ConditionItem<C>[];
}

export default function EvolutionTrigger<C extends ConditionKey>({
  trigger,
  condition,
}: EvolutionTriggerProps<C>) {
  const {
    triggerContent,
  } = useEvolutionTrigger(trigger, condition);

  if (!triggerContent) {
    return null;
  }

  return <span className="text-nowrap">{triggerContent}</span>;
}
