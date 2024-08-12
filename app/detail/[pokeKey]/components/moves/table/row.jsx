import React, { Fragment } from 'react';
import { useColumns } from './table.context';

export default function Row({ move, ...props }) {
  const { columns, renderFn } = useColumns();

  return (
    <div {...props}>
      {columns.map(({ key, className }) => (
        <Fragment key={key}>
          {renderFn[key](move, className)}
        </Fragment>
      ))}
    </div>
  );
}
