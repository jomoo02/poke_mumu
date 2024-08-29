import React from 'react';
import PokeNavigation from './components/navigation';
import PokeBasicInfo from './components/basic-info';
import PokeAbilities from './components/abilities';
import PokeForms from './components/forms';
import PokeDefenseCompatibility from './components/defense-compatibility';
import PokeStats from './components/stats';
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
        <PokeEvolution pokeKey={pokeKey} />
        <PokeMoves pokeKey={pokeKey} />
      </div>
    </>
  );
}
