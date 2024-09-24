import React, { Suspense } from 'react';
import PokeNavigation from './modules/navigation';
import PokeInformation from './modules/information';
import PokeAbilities from './modules/abilities';
import PokeForms from './modules/forms';
import PokeDefenseCompatibility from './modules/defense-compatibility';
import PokeStats from './modules/stats';
import PokeEvolution from './modules/evolution';
import PokeMoves from './modules/moves';
import PageSkeleton from './components/page-skeleton';

export default async function DetailPage({ params }) {
  const { pokeKey } = params;

  return (
    <>
      <Suspense fallback={<PageSkeleton />}>
        <div className="grid gap-y-12">
          <PokeNavigation pokeKey={pokeKey} />
          <PokeInformation pokeKey={pokeKey} />
          <PokeAbilities pokeKey={pokeKey} />
          <PokeForms pokeKey={pokeKey} />
          <PokeDefenseCompatibility pokeKey={pokeKey} />
          <PokeStats pokeKey={pokeKey} />
          <PokeEvolution pokeKey={pokeKey} />
          <PokeMoves pokeKey={pokeKey} />
        </div>
      </Suspense>
    </>
  );
}
