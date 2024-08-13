import React, { Fragment } from 'react';
import { useColumns } from './table.context';

export default function Row({ item, rowClassName, renderRowFn }) {
  const columns = useColumns();

  return (
    <div className={rowClassName}>
      {columns.map(({ key, className }) => renderRowFn(key, item, className))}
    </div>
  );
}
