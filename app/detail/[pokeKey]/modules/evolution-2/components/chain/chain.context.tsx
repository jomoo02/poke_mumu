import React, {
  useContext,
  createContext,
  useMemo,
} from 'react';

const ChainContext = createContext({
  maxWidth: 0,
  maxDepth: 0,
});

export function useChainMaxWidth() {
  const { maxWidth } = useContext(ChainContext);

  return maxWidth;
}

export function useChainMaxDepth() {
  const { maxDepth } = useContext(ChainContext);

  return maxDepth;
}

export function ChainProvider({
  maxWidth,
  maxDepth,
  children,
}: {
  maxWidth: number,
  maxDepth: number,
  children?: React.ReactNode,
}) {
  const value = useMemo(() => ({
    maxDepth,
    maxWidth,
  }), [maxDepth, maxWidth]);

  return (
    <ChainContext.Provider value={value}>
      {children}
    </ChainContext.Provider>
  );
}
