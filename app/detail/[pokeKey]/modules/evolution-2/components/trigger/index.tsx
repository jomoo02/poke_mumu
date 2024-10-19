import React from 'react';
import useTrigger from '../../hooks/useTrigger';
import type { TriggerKey } from '../../types/trigger';
import type { ConditionItem } from '../../types/condition';

interface TriggerProps {
  trigger: TriggerKey;
  condition: ConditionItem[];
}

export default function Trigger({
  trigger,
  condition,
}: TriggerProps) {
  const { triggerContent } = useTrigger(trigger, condition);

  if (!triggerContent) {
    return null;
  }

  return <span>{triggerContent}</span>;
}
