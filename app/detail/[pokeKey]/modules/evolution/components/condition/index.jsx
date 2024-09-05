import React, { Fragment } from 'react';
import { useSortCondition } from '../../hooks/useCondition';
import ConditionInfo from './condition';

export default function Condition({ condition }) {
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
