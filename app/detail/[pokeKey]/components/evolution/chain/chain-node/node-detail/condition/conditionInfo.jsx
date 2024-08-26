import React from 'react';
import { useLanguage } from '@/app/language-provider';
import getConditionInfo from './conditionInfo.utils';

export default function ConditionInfo({
  condition,
  value,
}) {
  const { language } = useLanguage();

  const {
    affix,
    renderContent,
  } = getConditionInfo(condition);

  const { prefix, suffix } = affix[language] || {};

  return (
    <span>
      {prefix && <span className="mr-1">{prefix}</span>}
      {renderContent(value, language)}
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  );
}
