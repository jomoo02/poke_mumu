import React from 'react';
import ConditionContainer from '../condition-container';
import { MoveLink } from '../link-container';

export default function AgileStyleCase({ value, language }) {
  if (language === 'ko') {
    return (
      <ConditionContainer>
        <MoveLink move={value} language={language} />
        <span>속공으로 20번 사용</span>
      </ConditionContainer>
    );
  }
  return (
    <ConditionContainer>
      <span>Use</span>
      <MoveLink move={value} language={language} />
      <span>in the agile style 20 times in Hisui</span>
    </ConditionContainer>
  );
}
