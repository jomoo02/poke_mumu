import React from 'react';
import Head from './head';
import Row from './row';
import { TableProvider } from './table.context';

function TableContainer({
  columns,
  renderFn,
  children,
}) {
  return (
    <TableProvider columns={columns} renderFn={renderFn}>
      {children}
    </TableProvider>
  );
}

const Table = Object.assign(TableContainer, {
  Head,
  Row,
});

export default Table;
