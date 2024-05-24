import React from 'react';
import ConditionContainer from './condition-container';

function Gender({ value, language }) {
  const GENEDER_MAP = {
    2: { ko: '수컷', en: 'Male' },
    1: { ko: '암컷', en: 'Female' },
  };
  const gender = GENEDER_MAP[value]?.[language] || 'unknown';

  return (
    <ConditionContainer>
      {gender}
    </ConditionContainer>
  );
}

function MinBeauty({ language }) {
  const TEXT_MAP = {
    en: 'max Beauty',
    ko: '아름다움 수치 MAX 상태에서',
  };

  const text = TEXT_MAP[language] || TEXT_MAP.en;

  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
