import React from 'react';
import { MoveLink } from '../link-container';

const LANGUAGE_CONTENT = {
  ko: {
    suffix: '강공으로 20번 사용',
  },
  en: {
    prefix: 'Use',
    suffix: 'in the strong style 20 times in LA only',
  },
};

export default function StrongStyleCase({ value, language }) {
  const { prefix, suffix } = LANGUAGE_CONTENT[language];

  return (
    <>
      {prefix && <span className="mr-1">{prefix}</span>}
      <MoveLink move={value} language={language} />
      <span className="ml-1">{suffix}</span>
    </>
  );
}
