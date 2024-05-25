import React from 'react';
import ConditionContainer from '../condition-container';

export default function SpinCase({ language }) {
  if (language === 'ko') {
    return (
      <ConditionContainer>
        <span>사탕공예</span>
        <span>를 지니게하고 L스틱으로 캐릭터를 계속 회전</span>
      </ConditionContainer>
    );
  }
  return (
    <ConditionContainer styleClass="gap-x-1">
      <span>Spin holding a</span>
      <span>Sweet</span>
    </ConditionContainer>
  );
}
