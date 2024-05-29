import React from 'react';
import { ItmeLinkWithParticle } from '../link-container';

const LANGUAGE_CONTENT = {
  ko: {
    suffix: '지닌채',
  },
  en: {
    prefix: 'holding',
  },
};

export default function HeldItemCase({ value, language }) {
  const { suffix, prefix } = LANGUAGE_CONTENT[language];

  return (
    <>
      {prefix && <span className="mr-1">{prefix}</span>}
      <ItmeLinkWithParticle item={value} language={language} />
      {suffix && <span className="ml-1">{suffix}</span>}
    </>
  );
}
