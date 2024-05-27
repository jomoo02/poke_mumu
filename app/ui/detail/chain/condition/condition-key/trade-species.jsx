import React from 'react';
import ConditionContainer from '../condition-container';
import { PokeLinkWithParticleForAnd } from '../link-container';

const LANGUAGE_CONTENT = {
  ko: {
    className: '',
  },
  en: {
    prefix: 'for',
    className: 'gap-x-1',
  },
};

export default function TradeSpeciesCase({ value, language }) {
  const { className, prefix } = LANGUAGE_CONTENT[language];

  return (
    <ConditionContainer className={className}>
      {prefix && <span>{prefix}</span>}
      <PokeLinkWithParticleForAnd poke={value} language={language} />
    </ConditionContainer>
  );
}
