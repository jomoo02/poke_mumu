import React from 'react';
import ConditionContainer from '../condition-container';
import { MoveLink } from '../link-container';

const LANGUAGE_CONTENT = {
  ko: {
    suffix: '속공으로 20번 사용',
  },
  en: {
    prefix: 'Use',
    suffix: 'in the agile style 20 times in Hisui',
  },
};

export default function AgileStyleCase({ value, language }) {
  const { prefix, suffix } = LANGUAGE_CONTENT[language];

  return (
    <ConditionContainer className="gap-x-1">
      {prefix && <span>{prefix}</span>}
      <MoveLink move={value} language={language} />
      <span>{suffix}</span>
    </ConditionContainer>
  );
}
