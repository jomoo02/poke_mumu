import React from 'react';
import PokeNavigation from './modules/navigation';
import PokeBasicInfo from './modules/basic-info';
import PokeAbilities from './modules/abilities';
import PokeForms from './modules/forms';
import PokeDefenseCompatibility from './modules/defense-compatibility';
import PokeStats from './modules/stats';
import PokeMoves from './components/moves';
import PokeEvolution from './components/evolution';

export default async function DetailPage({ params }) {
  const { pokeKey } = params;

  return (
    <>
      <div className="grid gap-y-12">
        <PokeNavigation pokeKey={pokeKey} />
        <PokeBasicInfo pokeKey={pokeKey} />
        <PokeAbilities pokeKey={pokeKey} />
        <PokeForms pokeKey={pokeKey} />
        <PokeDefenseCompatibility pokeKey={pokeKey} />
        <PokeStats pokeKey={pokeKey} />
        {/* <PokeEvolution pokeKey={pokeKey} /> */}
        {/* <PokeMoves pokeKey={pokeKey} /> */}
      </div>
    </>
  );
}
