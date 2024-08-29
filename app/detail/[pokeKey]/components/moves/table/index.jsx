'use client';

import React from 'react';
import { TableProvider } from './table.context';
import Head from './head';
import Row from './row';

function Table({ columns, children }) {
  if (!columns || columns.length === 0) {
    return null;
  }

  return (
    <TableProvider
      columns={columns}
    >
      <div>
        {children}
      </div>
    </TableProvider>
  );
}

Table.Head = Head;
Table.Row = Row;

export default Table;
