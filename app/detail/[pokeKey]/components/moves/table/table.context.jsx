'use client';

import React, { createContext, useContext, useMemo } from 'react';

const TableContext = createContext({
  columns: [],
  renderFn: {},
});

export function TableProvider({
  columns,
  renderFn,
  children,
}) {
  const value = useMemo(() => ({ columns, renderFn }), [columns, renderFn]);

  return (
    <TableContext.Provider value={value}>
      {children}
    </TableContext.Provider>
  );
}

export function useColumns() {
  return useContext(TableContext);
}


