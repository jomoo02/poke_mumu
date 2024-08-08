import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchChain } from '@/app/api/chain';
import Header from '../header';

async function Chain({ pokeKey }) {
  const { types, chainIndex } = await fetchPokeKey(pokeKey);
  const chainData = await fetchChain(chainIndex);
  const type = types[0];

  if (!chainData.length) {
    return null;
  }

  const gridClassNames = {
    1: 'grid grid-cols-1',
    2: 'grid grid-cols-2 md:grid-cols-1',
    3: 'grid grid-cols-3 md:grid-cols-1',
    4: 'grid-grid-cols-4 md:grid-cols-1',
    7: 'grid grid-cols-7 md:grid-cols-1',
    8: 'grid grid-cols-2 lg:grid-cols-4',
  };

  const { chain, maxWidth, maxDepth } = chainData;

  const gridClassName = gridClassNames[chain.length];

  return (
    <div>
      <Header type={type} category="chain" />
      <div className={`md:flex justify-center pt-2 pb-1 border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <div className={`${gridColumn[chain.length]} md:gap-y-4`}>
        </div>
      </div>
    </div>
  );
}
