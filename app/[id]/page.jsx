import React from 'react';
import fetchPokeDetail from '@/app/api/detail';
import BasicInfo from '@/app/ui/detail/basic-info';
import Abilities from '@/app/ui/detail/ability';
import Types from '@/app/ui/detail/type';
import Stats from '@/app/ui/detail/stat';
import Moves from '@/app/ui/detail/moves';

export default async function DetailPage({ params }) {
  const id = params?.id;

  const {
    no, name, sprity, abilities, types, stats, moves,
  } = await fetchPokeDetail(id);

  return (
    <div className="grid gap-y-10">
      <BasicInfo no={no} name={name} sprity={sprity} />
      <Abilities abilities={abilities} />
      <Types types={types} />
      <Stats base={stats.baseStats} effort={stats.effortStats} type={types[0]} />
      <Moves moves={moves} />
    </div>
  );
}
