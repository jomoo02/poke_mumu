import React from 'react';
import { ItemLink } from '../link-container';

export default function ItemCase({ value, language }) {
  return (
    <ItemLink item={value} language={language} />
  );
}
