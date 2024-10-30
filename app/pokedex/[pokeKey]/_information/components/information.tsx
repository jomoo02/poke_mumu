import React from 'react';
import type { Poke } from '@/app/models/PokeV2';
import type { PokeDetail } from '@/app/models/Detail';
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
    <div>
      <Detail pokeDetail={pokeDetail} />
      <Breeding pokeDetail={pokeDetail} />
    </div>
  );
}
