import React from 'react';
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
    <>
      {prefix && <span className="mr-1">{prefix}</span>}
      <MoveLink move={value} language={language} />
      <span className="ml-1">{suffix}</span>
    </>
  );
}
