import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';

const TableContext = createContext({
  columns: [],
});

export function useColumns() {
  const { columns } = useContext(TableContext);

  return columns;
}

export function TableProvider({
  columns,
  children,
}) {
  const value = useMemo(() => (
    { columns }
  ), [columns]);

  return (
    <TableContext.Provider value={value}>
      {children}
    </TableContext.Provider>
  );
}
