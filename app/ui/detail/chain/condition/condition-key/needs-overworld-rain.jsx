import React from 'react';
import ConditionContainer from '../condition-container';

const LANGUAGE_CONTENT = {
  en: 'during rain',
  ko: '비가 오는 필드',
};

export default function NeedsOverworldRainCase({ language }) {
  const text = LANGUAGE_CONTENT[language];

  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
