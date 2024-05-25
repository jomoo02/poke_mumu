import React from 'react';
import ConditionContainer from '../condition-container';

export default function MinAffectionCase({ value, language }) {
  const text = language === 'ko' ? `절친도 ${value}단계 이상일 때` : `min affection ${value}`;
  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
