import React, { Suspense } from 'react';
import { preload } from './utils/get';
import PokeAbilities from './_abilities';

interface PageProps {
  params: {
    pokeKey: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { pokeKey } = params;

  preload(pokeKey);

  return (
    <div className="px-2.5 xs:px-4">
      <Suspense fallback={<div>1</div>}>
        <PokeAbilities pokeKey={pokeKey} />
      </Suspense>
    </div>
  );
}
