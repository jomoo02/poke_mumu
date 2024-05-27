import React from 'react';
import ConditionContainer from '../condition-container';
import { MoveLink } from '../link-container';

const LANGUAGE_CONTENT = {
  ko: {
    suffix: '배운 상태에서',
  },
  en: {
    prefix: 'knowing',
  },
};

export default function KnownMoveCase({ value, language }) {
  const { prefix, suffix } = LANGUAGE_CONTENT[language];

  return (
    <ConditionContainer className="gap-x-1">
      {prefix && <span>{prefix}</span>}
      <MoveLink move={value} language={language} />
      {suffix && <span>{suffix}</span>}
    </ConditionContainer>
  );
}
