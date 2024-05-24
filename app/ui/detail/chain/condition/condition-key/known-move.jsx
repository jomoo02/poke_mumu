import React from 'react';
import ConditionContainer from '../condition-container';
import { MoveLink } from '../link-container';

export default function KnownMoveCase({ value, language }) {
  const text = language === 'ko' ? '배운 상태에서' : 'knowing';
  const styleClass = language === 'ko' ? 'gap-x-1' : 'gap-x-1 flex-row-reverse';

  return (
    <ConditionContainer styleClass={styleClass}>
      <MoveLink move={value} language={language} />
      <span>{text}</span>
    </ConditionContainer>
  );
}
