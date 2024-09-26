import React, { Suspense } from 'react';
import { fetchPokeKey } from '@/app/api/data';
import typesKo from '@/app/translations/type';
import PokeNavigation from './modules/navigation';
import PokeInformation from './modules/information';
import PokeAbilities from './modules/abilities';
import PokeForms from './modules/forms';
import PokeDefenseCompatibility from './modules/defense-compatibility';
import PokeStats from './modules/stats';
import PokeEvolution from './modules/evolution';
import PokeMoves from './modules/moves';
import PageSkeleton from './components/page-skeleton';

export async function generateMetadata({ params }) {
  const { pokeKey } = params;

  const {
    name,
    no,
    genera,
    types,
    id,
  } = await fetchPokeKey(pokeKey);

  const title = `${name.ko} (${name.en})`;

  const typeText = types.reduce((acc, type, index) => {
    if (index === 0) {
      return typesKo[type];
    }
    return `${acc}, ${typesKo[type]}`;
  }, '');

  const description = `도감 번호 ${no} ${name.ko} ${genera.ko} ${typeText} 타입`;

  const images = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

  return {
    title,
    description,
    openGraph: {
      images: { url: `${images}/${id}.png` },
    },
  };
}

export default async function DetailPage({ params }) {
  const { pokeKey } = params;

  return (
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
  );
}
