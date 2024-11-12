import React, { Fragment } from 'react';
import type { ConditionItem, ConditionKey } from '@/app/models/chain.type';
import Condition from './condition';
import useCondition from '../../hooks/useCondition';

export default function ConditionList({
  condition,
}: {
  condition: ConditionItem<ConditionKey>[];
}) {
  const { sortedCondition } = useCondition(condition);

  return (
    <>
      {sortedCondition.map(({ key, value }, index) => (
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
