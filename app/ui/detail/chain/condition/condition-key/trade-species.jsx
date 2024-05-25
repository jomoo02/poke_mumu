import React from 'react';
import ConditionContainer from '../condition-container';
import { PokeLinkWithParticleForAnd } from '../link-container';

export default function TradeSpeciesCase({ value, language }) {
  const styleClass = language === 'ko' ? '' : 'gap-x-1';
  const textTag = language === 'ko' ? null : (<span>for</span>);

  return (
    <ConditionContainer styleClass={styleClass}>
      {textTag}
      <PokeLinkWithParticleForAnd poke={value} language={language} />
    </ConditionContainer>
  );
}
