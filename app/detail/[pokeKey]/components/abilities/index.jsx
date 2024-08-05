import React, { Suspense } from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchDetail } from '@/app/api/detail';
import Ability from './ability';
import Header from '../header';
import AbilitiesSkeleton from './skeleton';

async function Abilities({ pokeKey }) {
  const [basicInfo, detailInfo] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  const { types } = basicInfo;
  const type = types[0];
  const { abilities } = detailInfo;

  return (
    <>
      <Header type={type} category="abilities" />
      <div className={`grid divide-y border-2 border-t-0 ${type}-border rounded-b-sm`}>
        {abilities.map(({ name, flavorText, isHidden }) => (
          <Ability
            key={name.en}
            name={name}
            flavorText={flavorText}
            isHidden={isHidden}
          />
        ))}
      </div>
    </>
  );
}

export default function PokeAbilities({ pokeKey }) {
  return (
    <div>
      <Suspense fallback={<AbilitiesSkeleton />}>
        <Abilities pokeKey={pokeKey} />
      </Suspense>
    </div>
  );
}
