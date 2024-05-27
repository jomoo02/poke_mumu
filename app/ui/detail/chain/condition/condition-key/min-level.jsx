import React from 'react';
import ConditionContainer from '../condition-container';

export default function MinLevelCase({ value }) {
  return (
    <ConditionContainer className="gap-x-1">
      <span>Level</span>
      <span>{value}</span>
    </ConditionContainer>
  );
}
