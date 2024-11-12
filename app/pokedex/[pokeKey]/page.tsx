import React, { Suspense } from 'react';
import { preload } from './utils/get';
import PokeNavigation from './_navigation';
import PokeAbilities from './_abilities';
import PokeDefenseCompatibility from './_defense-compatibility';
import PokeInformation from './_information';
import PokeEvolution from './_evolution';
import PokeStats from './_stats';
import PokeMoves from './_moves';
import PageSkeleton from './components/page-skeleton';

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
      <Suspense fallback={<PageSkeleton pokeKey={pokeKey} />}>
        <div className="grid gap-y-12">
          <PokeNavigation pokeKey={pokeKey} />
          <PokeInformation pokeKey={pokeKey} />
          <PokeAbilities pokeKey={pokeKey} />
          <PokeDefenseCompatibility pokeKey={pokeKey} />
          <PokeStats pokeKey={pokeKey} />
          <PokeEvolution pokeKey={pokeKey} />
          <PokeMoves pokeKey={pokeKey} />
        </div>
      </Suspense>
    </div>
  );
}
