import React, { Fragment } from 'react';
import { useLanguage } from '@/app/language-provider';
import ConditionInfo from './conditionInfo';

function sortCondition(condition, language) {
  if (language === 'en') {
    return condition;
  }

  const keyObjects = [];
  const otherObjects = [];
  const lastObjects = [];

  condition.forEach((obj) => {
    if (obj.key === 'time_of_day' || obj.key === 'location') {
      keyObjects.push(obj);
    } else if (obj.key === 'min_level') {
      lastObjects.push(obj);
    } else {
      otherObjects.push(obj);
    }
  });
  return [...keyObjects, ...otherObjects, ...lastObjects];
}

export default function Condition({ condition }) {
  const { language } = useLanguage();

  const sortedCondition = sortCondition(condition, language);

  return (
    <span>
      {sortedCondition.map(({ key, value }, index) => (
        <Fragment key={value}>
          {index > 0 && <span className="mx-1">+</span>}
          <ConditionInfo condition={key} value={value} />
        </Fragment>
      ))}
    </span>
  );
}
