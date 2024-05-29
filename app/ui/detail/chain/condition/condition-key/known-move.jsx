import React from 'react';
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
    <>
      {prefix && <span className="mr-1">{prefix}</span>}
      <MoveLink move={value} language={language} />
      {suffix && <span className="ml-1">{suffix}</span>}
    </>
  );
}
