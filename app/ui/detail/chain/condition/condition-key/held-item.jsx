import React from 'react';
import ConditionContainer from '../condition-container';
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
    <ConditionContainer className="gap-x-1">
      {suffix && <span>{suffix}</span>}
      <ItmeLinkWithParticle item={value} language={language} />
      {prefix && <span>{prefix}</span>}
    </ConditionContainer>
  );
}
