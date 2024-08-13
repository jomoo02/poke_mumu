'use client';

import React from 'react';
import { TableProvider } from './table.context';

export default function TableContainer({
  columns,
  children,
}) {
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
