import React from 'react';
import type { Poke } from '@/app/models/poke.type';
import type { PokeDetail } from '@/app/models/detail.type';
import Basic from './basic';
import Detail from './detail';
import Breeding from './breeding';

interface InformationProps {
  poke: Poke;
  pokeDetail: PokeDetail;
}

export default function Information({
  poke,
  pokeDetail,
}: InformationProps) {
  return (
    <div className="px-2 2xl:px-10 pb-1 md:pb-4 grid xl:grid-cols-2 xl:gap-x-8 2xl:gap-x-14 gap-y-4 xl:min-h-[500px]">
      <Basic poke={poke} />
      <div className="grid gap-y-4 gap-x-6 xl:gap-y-6">
        <Detail pokeDetail={pokeDetail} />
        <Breeding pokeDetail={pokeDetail} />
      </div>
    </div>
  );
}
