import React from 'react';
import { useLanguage } from '@/app/language-provider';
import { useConditionInfoLocaleAffix } from '../../hooks/useCondition';
import getConditionInfo from './condition.utils';
import type { ConditionKey, RenderContentValueMap } from '../../types/condition';

export default function ConditionInfo<K extends ConditionKey>({
  condition,
  value,
}: {
  condition: K;
  value: RenderContentValueMap[K];
}) {
  const { language } = useLanguage();

  const {
    affix,
    renderContent,
  } = getConditionInfo(condition);

  const { prefix, suffix } = useConditionInfoLocaleAffix(affix);

  if (renderContent) {
    return (
      <span>
        {prefix && <span className="mr-1">{prefix}</span>}
        {renderContent(value, language)}
        {suffix && <span className="ml-1">{suffix}</span>}
      </span>
    );
  }
}
