import React, { Fragment } from 'react';
import { useSortCondition } from '../../hooks/useCondition';
import ConditionInfo from './condition';
import type { ConditionItem } from '../../types/condition';

interface ConditionProps {
  condition: ConditionItem[];
}

export default function Condition({ condition }: ConditionProps) {
  const { sortedCondition } = useSortCondition(condition);

  return (
    <>
      {sortedCondition.map(({ key, value }, index) => (
        <Fragment key={value}>
          {index > 0 && <span>+</span>}
          <ConditionInfo
            condition={key}
            value={value}
          />
        </Fragment>
      ))}
    </>
  );
}
