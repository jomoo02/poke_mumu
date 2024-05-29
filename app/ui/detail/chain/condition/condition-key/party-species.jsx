import React from 'react';
import { PokeLinkWithSbjectParticle } from '../link-container';

const LANGUAGE_CONTENT = {
  ko: {
    prefix: '파티에',
    suffix: '있을 때',
  },
  en: {
    prefix: 'with',
    middle: 'in',
    suffix: 'party',
  },
};

export default function PartySpeciesCase({ value, language }) {
  const { prefix, middle, suffix } = LANGUAGE_CONTENT[language];

  return (
    <>
      <span className="mr-1">{prefix}</span>
      <PokeLinkWithSbjectParticle poke={value} language={language} />
      {language === 'en' && <span className="ml-1">{middle}</span>}
      <span className="ml-1">{suffix}</span>
    </>
  );
}
