import React from 'react';
import ConditionContainer from '../condition-container';

export default function MinBeautyCase({ language }) {
  const text = language === 'ko' ? '아름다움 수치 MAX 상태에서' : 'max Beauty';
  return (
    <ConditionContainer className="flex justify-center items-center text-sm">
      {text}
    </ConditionContainer>
  );
}
