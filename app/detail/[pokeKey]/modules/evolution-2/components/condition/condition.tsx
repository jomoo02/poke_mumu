import React from 'react';
import { useLanguage } from '@/app/language-provider';
import type { PokeTypeItem } from '@/app/data/pokeType';
import { useConditionInfoLocaleAffix } from '../../hooks/useCondition';
import getConditionInfo from './condition.utils';
import type { ConditionKey } from './condition.utils';
import type { ConditionOtherCase } from '../../types/condition';
import type { AreaKey } from '../../types/area';

export default function ConditionInfo({
  condition,
  value,
}: {
  condition: ConditionKey,
  value: number
  | string
  | PokeTypeItem
  | 'amped'
  | 'lowKey'
  | 'night' | 'day' | 'dusk' | 'full-moon'
  | 'alola' | 'galar' | 'hisui'
  | ConditionOtherCase
  | AreaKey,
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
