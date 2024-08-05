import React, { Suspense } from 'react';
import DefenseCompatibility from '@/app/ui/detail/defense-compatibility';
import Stats from '@/app/ui/detail/stats/stats';
import Moves from '@/app/ui/detail/moves/moves';
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
      <Suspense fallback={null}>
        <ScrollTop />
      </Suspense>
      <div className="grid gap-y-12">
        <PokeNavigation pokeKey={pokeKey} />
        {/* <PokeBasicInfo pokeKey={pokeKey} />
        <PokeAbilities pokeKey={pokeKey} />
        <PokeForms pokeKey={pokeKey} /> */}
        {/* <DefenseCompatibility types={types} /> */}
        <PokeDefenseCompatibility pokeKey={pokeKey} />
        {/* <Chain chainData={chainData} type={mainType} />
        <Stats base={stats.baseStats} effort={stats.effortStats} type={mainType} />
        <Moves moves={moves} type={mainType} /> */}
      </div>
    </>
  );
}
