import React from 'react';
import Trigger from '../trigger';
import Condition from '../condition';

export function renderChainPokeDetail(
  trigger,
  condition,
  isReverse,
) {
  const components = [
    <Trigger key="trigger" trigger={trigger} condition={condition} />,
    <Condition key="condition" condition={condition} />,
  ];

  return isReverse ? components.reverse() : components;
}
