import React, { Suspense } from 'react';
import Chain from '@/app/ui/detail/chain/chain';
import { fetchChain } from '@/app/api/chain';
import { fetchPokeKey } from '@/app/api/data';
import { fetchDetail } from '@/app/api/detail';
import ScrollTop from '@/app/ui/scrollTop';
import PokeNavigation from './components/navigation';
import PokeBasicInfo from './components/basic-info';
import PokeAbilities from './components/abilities';
import PokeForms from './components/forms';
import PokeDefenseCompatibility from './components/defense-compatibility';
import PokeStats from './components/stats';
import PokeMoves from './components/moves';

import MovesSkeleton from './components/moves/skeleton';
import NavigationSkeleton from './components/navigation/skeleton';
import BasicInfoSkeleton from './components/basic-info/skeleton';
import AbilitiesSkeleton from './components/abilities/skeleton';
import FormsSkeleton from './components/forms/skeleton';
import DefenseCompatibilitySkeleton from './components/defense-compatibility/skeleton';
import StatsSkeleton from './components/stats/skeleton';

// import PokeChain from './components/chain';
import PokeEvolution from './components/evolution';

export default async function DetailPage({ params }) {
  const { pokeKey } = params;

  // const [basicInfo, detailInfo] = await Promise.all([fetchPokeKey(pokeKey), fetchDetail(pokeKey)]);

  // const { types, chainIndex } = basicInfo;

  // const chainData = await fetchChain(chainIndex);

  // const mainType = types[0];

  // const {
  //   stats,
  //   moves,
  // } = detailInfo;
  return (
    <>
      {/* <Suspense fallback={null}>
        <ScrollTop />
      </Suspense> */}
      <div className="grid gap-y-12">
        <PokeNavigation pokeKey={pokeKey} />
        {/* <NavigationSkeleton />

        <PokeBasicInfo pokeKey={pokeKey} />
        <BasicInfoSkeleton />

        <PokeAbilities pokeKey={pokeKey} />
        <AbilitiesSkeleton />

        <PokeForms pokeKey={pokeKey} />
        <FormsSkeleton />

        <PokeDefenseCompatibility pokeKey={pokeKey} />
        <DefenseCompatibilitySkeleton />

        <PokeStats pokeKey={pokeKey} />
        <StatsSkeleton /> */}

        {/* <Chain chainData={chainData} type={mainType} /> */}
        {/* <PokeChain pokeKey={pokeKey} /> */}
        <PokeEvolution pokeKey={pokeKey} />

        <PokeMoves pokeKey={pokeKey} />
        <MovesSkeleton />

        {/* <Moves moves={moves} type={mainType} /> */}
      </div>
    </>
  );
}
