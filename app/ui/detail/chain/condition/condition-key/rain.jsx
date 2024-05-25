import React from 'react';
import ConditionContainer from '../condition-container';

export default function NeedsOverworldRainCase({ language }) {
  const text = language === 'ko' ? (
    '비가 오는 필드'
  ) : 'during rain';

  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
