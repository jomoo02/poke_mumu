import React from 'react';
import ConditionContainer from '../condition-container';
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
    <ConditionContainer className="gap-x-1">
      <span>{prefix}</span>
      <PokeLinkWithSbjectParticle poke={value} language={language} />
      {language === 'en' && <span>{middle}</span>}
      <span>{suffix}</span>
    </ConditionContainer>
  );
}
