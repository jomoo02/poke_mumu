import React from 'react';
import ConditionContainer from '../condition-container';
import { ItemLink } from '../link-container';

export default function ItemCase({ value, language }) {
  return (
    <ConditionContainer className="flex justify-center items-center text-sm">
      <ItemLink item={value} language={language} />
    </ConditionContainer>
  );
}
