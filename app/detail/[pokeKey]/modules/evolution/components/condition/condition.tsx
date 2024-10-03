import React from 'react';
import { useLanguage } from '@/app/language-provider';
import { useConditionInfoLocaleAffix } from '../../hooks/useCondition';
import getConditionInfo from './condition.utils';

export default function ConditionInfo({
  condition,
  value,
}: {
  condition: string,
  value: number,
}) {
  const { language } = useLanguage();

  const {
    affix,
    renderContent,
  } = getConditionInfo(condition);

  const { prefix, suffix } = useConditionInfoLocaleAffix(affix);

  return (
    <span>
      {prefix && <span className="mr-1">{prefix}</span>}
      {renderContent(value, language)}
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  );
}
