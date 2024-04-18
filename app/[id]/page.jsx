import React from 'react';
import fetchPokeDetail from '@/app/api/detail';
import BasicInfo from '@/app/ui/detail/basic-info';
import Abilities from '@/app/ui/detail/ability';
import Types from '@/app/ui/detail/type';
import Stats from '@/app/ui/detail/stat';

export default async function DetailPage({ params }) {
  const id = params?.id;

  const {
    no, name, sprity, abilities, types, stats,
  } = await fetchPokeDetail(id);

  console.log(stats);

  return (
    <div className="grid gap-y-10">
      <BasicInfo no={no} name={name} sprity={sprity} />
      <Abilities abilities={abilities} />
      <Types types={types} />
      <Stats base={stats.baseStats} effort={stats.effortStats} type={types[0]} />
    </div>
  );
}
