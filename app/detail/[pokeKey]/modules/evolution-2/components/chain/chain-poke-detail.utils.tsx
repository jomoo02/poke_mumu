import React from 'react';
import Trigger from '../trigger';
import Condition from '../condition';
import type { TriggerKey } from '../../types/trigger';
import type { ConditionItem } from '../../types/condition';

export function renderChainPokeDetail(
  trigger: TriggerKey,
  condition: ConditionItem[],
  isReverse: boolean,
) {
  const components = [
    <Trigger key="trigger" trigger={trigger} condition={condition} />,
    <Condition key="condition" condition={condition} />,
  ];

  return isReverse ? components.reverse() : components;
}
