import React, { Fragment } from 'react';
import type { ConditionItem, ConditionKey } from '../../data/condition';
import Condition from './condition';

export default function ConditionList<C extends ConditionKey>({
  condition,
}: {
  condition: ConditionItem<C>[];
}) {
  return (
    <>
      {condition.map(({ key, value }, index) => (
        <Fragment key={key}>
          {index > 0 && <span>+</span>}
          <Condition
            conditionKey={key}
            value={value}
          />
        </Fragment>
      ))}
    </>
  );
}
