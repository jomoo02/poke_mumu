import React from 'react';
import ConditionContainer from '../condition-container';

const TEXT_GENERATORS = {
  ko: (gender) => (gender === 2 ? '수컷' : '암컷'),
  en: (gender) => (gender === 2 ? 'Male' : 'Female'),
};

export default function GenderCase({ value, language }) {
  const text = TEXT_GENERATORS[language](value);

  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
