import React from 'react';
import useEvolutionTrigger from '../hooks/useEvolutionTrigger';
import type { Trigger } from '../data/evolutionTrigger';
import type { ConditionItem, ConditionKey } from '../data/condition';

interface EvolutionTriggerProps<C extends ConditionKey> {
  trigger: Trigger;
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

  return <span>{triggerContent}</span>;
}
