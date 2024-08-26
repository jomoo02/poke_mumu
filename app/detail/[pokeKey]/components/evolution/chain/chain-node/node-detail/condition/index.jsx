import React, { Fragment } from 'react';
import { useLanguage } from '@/app/language-provider';
import ConditionInfo from './conditionInfo';
import { sortConditionByLanguage } from './condtion.utils';

export default function Condition({ condition }) {
  const { language } = useLanguage();

  const sortedCondition = sortConditionByLanguage(condition, language);

  return (
    <>
      {sortedCondition.map(({ key, value }, index) => (
        <Fragment key={value}>
          {index > 0 && <span>+</span>}
          <ConditionInfo condition={key} value={value} />
        </Fragment>
      ))}
    </>
  );
}
