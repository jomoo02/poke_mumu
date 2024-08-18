import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';

const MethodMovesContext = createContext({
  method: 'level',
});

export function useMethod() {
  const { method } = useContext(MethodMovesContext);

  return method;
}

export function MethodMovesProvider({ method, children }) {
  const value = useMemo(() => ({ method }), [method]);

  return (
    <MethodMovesContext.Provider value={value}>
      {children}
    </MethodMovesContext.Provider>
  );
}
