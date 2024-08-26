'use client';

import React from 'react';
import ChainNode from './chain-node';
import { ChainProvider, useChainMaxWidth } from './chain.context';

const gridColumn = {
  1: 'grid grid-cols-1',
  2: 'grid grid-cols-2 md:grid-cols-1',
  3: 'grid grid-cols-3 md:grid-cols-1',
  4: 'grid-grid-cols-4 md:grid-cols-1',
  7: 'grid grid-cols-7 md:grid-cols-1',
  8: 'grid grid-cols-2 lg:grid-cols-4',
};

function NestedChain({ chainItem }) {
  const { to, ...chainNodeData } = chainItem;

  const maxWidth = useChainMaxWidth();

  return (
    <div className={maxWidth === 8 ? '' : 'md:flex'}>
      <ChainNode chainNodeData={chainNodeData} />
      {to.length > 0 && (
        <div className={`${gridColumn[to.length]} gap-y-4`}>
          {to.map((nestedChainItem) => (
            <NestedChain
              key={nestedChainItem.id}
              chainItem={nestedChainItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Chain({
  chain,
  type,
  maxDepth,
  maxWidth,
}) {
  if (!chain) {
    return null;
  }

  return (
    <ChainProvider
      maxDepth={maxDepth}
      maxWidth={maxWidth}
    >
      <div className={`md:flex justify-center pt-2 pb-1 border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <div className={`${gridColumn[chain.length]} md:gap-y-4`}>
          {chain.map((chainItem) => (
            <NestedChain
              key={`${chainItem.id}-${chainItem.name.en}`}
              chainItem={chainItem}
            />
          ))}
        </div>
      </div>
    </ChainProvider>
  );
}
