import React, { Suspense } from 'react';
import { preload } from './utils/get';
import PokeNavigation from './_navigation';
import PokeAbilities from './_abilities';
import PokeDefenseCompatibility from './_defense-compatibility';
import PokeInformation from './_information';
import PokeEvolution from './_evolution';

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
        <PokeNavigation pokeKey={pokeKey} />
        <PokeAbilities pokeKey={pokeKey} />
        <PokeDefenseCompatibility pokeKey={pokeKey} />
        <PokeInformation pokeKey={pokeKey} />
        <PokeEvolution pokeKey={pokeKey} />
      </Suspense>
    </div>
  );
}
