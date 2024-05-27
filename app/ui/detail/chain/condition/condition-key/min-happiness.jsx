import React from 'react';
import ConditionContainer from '../condition-container';

const LANGUAGE_CONTENT = {
  en: 'with high Friendship',
  ko: '친밀도가 높은 상태에서',
};

export default function MinHappinessCase({ language }) {
  const text = LANGUAGE_CONTENT[language];

  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
