import React from 'react';
import { PokeLinkWithParticleForAnd } from '../link-container';

const LANGUAGE_CONTENT = {
  ko: {},
  en: {
    prefix: 'for',
  },
};

export default function TradeSpeciesCase({ value, language }) {
  const { prefix } = LANGUAGE_CONTENT[language];

  return (
    <>
      {prefix && <span className="mr-1">{prefix}</span>}
      <PokeLinkWithParticleForAnd poke={value} language={language} />
    </>
  );
}
