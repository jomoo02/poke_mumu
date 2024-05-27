import React from 'react';
import ConditionContainer from '../condition-container';
import { ItemLink } from '../link-container';

export default function ItemCase({ value, language }) {
  return (
    <ConditionContainer>
      <ItemLink item={value} language={language} />
    </ConditionContainer>
  );
}
