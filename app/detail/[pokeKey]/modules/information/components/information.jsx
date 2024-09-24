import React from 'react';
import InformationBasic from './information-basic';
import InformationDetail from './infomaition-detail';
import InformationBreeding from './information-breeding';

export default function Information({ pokeInfo }) {
  return (
    <div className="px-2 2xl:px-10 pb-1 md:pb-4 grid xl:grid-cols-2 xl:gap-x-8 2xl:gap-x-14 gap-y-4">
      <InformationBasic pokeInfo={pokeInfo} />
      <div className="grid gap-y-4 gap-x-6 xl:gap-y-6">
        <InformationDetail pokeInfo={pokeInfo} />
        <InformationBreeding pokeInfo={pokeInfo} />
      </div>
    </div>
  );
}
