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

  const { prefix, suffix } = affix || {};

  return (
    <span>
      {prefix && <span className="mr-1">{prefix[language]}</span>}
      {renderContent(value, language)}
      {suffix && <span className="ml-1">{suffix[language]}</span>}
    </span>
  );
}
