import React from 'react';
import { fetchAllChain } from '@/app/api/chain';
import Chain from '@/app/ui/detail/chain/chain';

export default async function Main() {
  const allChain = await fetchAllChain();
  return (
    <div>
      {allChain.map((chain) => (
        <Chain key={chain.index} chainData={chain} />
      ))}
    </div>
  );
}
