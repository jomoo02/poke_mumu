import React from 'react';
import typesKo from '@/app/translations/type';
import ConditionContainer from '../condition-container';

export default function KnownMoveTypeCase({ value, language }) {
  const text = language === 'ko' ? `${typesKo[value]}타입 기술을 배우고` : `after ${value}-type move learned`;
  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
