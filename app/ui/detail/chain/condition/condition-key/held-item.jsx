import React from 'react';
import ConditionContainer from '../condition-container';
import { ItmeLinkWithParticle } from '../link-container';

export default function HeldItemCase({ value, language }) {
  const text = language === 'ko' ? '지닌채' : 'holding';
  const styleClass = language === 'ko' ? 'gap-x-1' : 'gap-x-1 flex-row-reverse';

  return (
    <ConditionContainer styleClass={styleClass}>
      <ItmeLinkWithParticle item={value} language={language} />
      <span>{text}</span>
    </ConditionContainer>
  );
}
