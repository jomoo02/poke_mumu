import React from 'react';
import ConditionContainer from '../condition-container';

export default function MinHappinessCase({ language }) {
  const enText = 'with high Friendship';
  const koText = '친밀도가 높은 상태에서';

  const text = language === 'ko' ? koText : enText;

  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
