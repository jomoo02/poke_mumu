import React from 'react';
import ConditionContainer from '../condition-container';

const TEXT_GENERATORS = {
  ko: (value) => `절친도 ${value}단계 이상일 때`,
  en: (value) => `min affection ${value}`,
};

export default function MinAffectionCase({ value, language }) {
  const text = TEXT_GENERATORS[language](value);

  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
