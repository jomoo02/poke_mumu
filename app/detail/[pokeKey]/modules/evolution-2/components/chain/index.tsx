'use client';

import React from 'react';
import ChainPoke from './chain-poke';
import { ChainProvider, useChainMaxWidth } from './chain.context';
import type { ChainItem } from '../../types/chain';

const gridColumnClassNames: Record<number, string> = {
  1: 'grid grid-cols-1',
  2: 'grid grid-cols-2 md:grid-cols-1',
  3: 'grid grid-cols-3 md:grid-cols-1',
  4: 'grid-grid-cols-4 md:grid-cols-1',
  7: 'grid grid-cols-7 md:grid-cols-1',
  8: 'grid grid-cols-2 lg:grid-cols-4',
};

function NestedChain({ chainItem }: { chainItem: ChainItem }) {
  const maxWidth = useChainMaxWidth();

  const nextChainCount = chainItem.to.length;

  const nextChainGridClassName = gridColumnClassNames[nextChainCount];

  return (
    <div className={maxWidth === 8 ? '' : 'md:flex'}>
      <ChainPoke pokeInfo={chainItem} />
      {nextChainCount > 0 && (
        <div
          className={`${nextChainGridClassName} gap-y-4`}
        >
          {chainItem.to.map((nestedChainItem) => (
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

export default function Chain({ chainObj }: { chainObj: {
  chain: ChainItem[];
  maxDepth: number;
  maxWidth: number;
} }) {
  const {
    chain,
    maxDepth,
    maxWidth,
  } = chainObj;

  if (!chain) {
    return null;
  }

  const chainGridClassName = gridColumnClassNames[chain.length];

  return (
    <ChainProvider
      maxDepth={maxDepth}
      maxWidth={maxWidth}
    >
      <div className="md:flex justify-center pt-2 pb-1">
        <div className={`${chainGridClassName} md:gap-y-4`}>
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
