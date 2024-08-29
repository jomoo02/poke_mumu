import React from 'react';
import { useColumns } from './table.context';

export default function Head({ headClassName, renderHeadCell }) {
  const columns = useColumns();

  return (
    <div className={headClassName}>
      {columns.map((column) => renderHeadCell(column))}
    </div>
  );
}
