import React from 'react';
import ConditionContainer from '../condition-container';

function relativePhysicalStats(value, language) {
  if (value === 1) {
    return language === 'ko' ? '공격이 방어보다 높다' : 'Attack > Defense';
  } if (value === -1) {
    return language === 'ko' ? '방어가 공격보다 높다' : 'Attack < Defense';
  }
  return language === 'ko' ? '공격과 방어가 같다' : 'Attack = Defense';
}

export default function RelativeStatCase({ value, language }) {
  const text = relativePhysicalStats(value, language);

  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
