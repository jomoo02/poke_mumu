'use client';

import React from 'react';
import { TableProvider } from './table.context';

export default function TableContainer({ columns, children }) {
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
