import React, { Suspense } from 'react';
import { fetchPokeKey } from '@/app/api/data';
import Type from '@/app/ui/detail/type';
import TypeDefenseCompatibility from './type-defense-compatibility';
import Header from '../header';
import DefenseCompatibilitySkeleton from './skeleton';

async function DefenseCompatibility({ pokeKey }) {
  const { types } = await fetchPokeKey(pokeKey);
  const mainType = types[0];

  return (
    <>
      <Header type={mainType} category="defenseCompatibility" />
      <div className={`border-2 border-t-0 ${mainType}-border rounded-b-sm`}>
        <div className={`flex py-1 md:py-1.5 justify-center items-center gap-x-2.5 ${mainType}-bg1 border-b-2 ${mainType}-border`}>
          <div className="flex gap-x-2">
            {types.map((type) => (
              <div key={type}>
                <Type type={type} />
              </div>
            ))}
          </div>
        </div>
        <TypeDefenseCompatibility types={types} />
      </div>
    </>
  );
}

export default function PokeDefenseCompatibility({ pokeKey }) {
  return (
    <div>
      <Suspense fallback={<DefenseCompatibilitySkeleton />}>
        <DefenseCompatibility pokeKey={pokeKey} />
      </Suspense>
    </div>
  );
}
