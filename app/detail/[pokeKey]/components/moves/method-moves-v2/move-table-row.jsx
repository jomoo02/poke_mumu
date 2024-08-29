import React from 'react';
import { CellByKey } from './move-table-row.utils';

export default function Row({ item, columns }) {
  return (
    <div className="flex h-9 items-stretch">
      {columns.map(({ key, className }) => (
        <CellByKey
          key={key}
          className={className}
          move={item}
          cellKey={key}
        />
      ))}
    </div>
  );
}
