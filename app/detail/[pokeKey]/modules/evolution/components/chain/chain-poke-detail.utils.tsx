import React from 'react';
import Trigger from '../trigger';
import Condition from '../condition';
import type { ConditionType } from '../../types/condition.type';

export function renderChainPokeDetail(
  trigger,
  condition: ConditionType,
  isReverse: boolean,
) {
  const components = [
    <Trigger key="trigger" trigger={trigger} condition={condition} />,
    <Condition key="condition" condition={condition} />,
  ];

  return isReverse ? components.reverse() : components;
}
