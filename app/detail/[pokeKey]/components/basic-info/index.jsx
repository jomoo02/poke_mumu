import React, { Suspense } from 'react';
import Image from 'next/image';
import { fetchPokeKey } from '@/app/api/data';
import InfoList from './info-list';
import TitleName from './title-name';
import Header from '../header';
import BasicInfoSkeleton from './skeleton';

function PokeImage({ sprity, alt }) {
  const basicUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const url = `${basicUrl}/${sprity}`;

  return (
    <div className="flex justify-center items-center py-3 md:py-0">
      <Image
        src={url}
        alt={alt}
        width={200}
        height={200}
        priority
      />
    </div>
  );
}

async function BasicInfo({ pokeKey }) {
  const basicInfo = await fetchPokeKey(pokeKey);
  const { types, sprity, name } = basicInfo;
  const type = types[0];

  return (
    <div>
      <TitleName basicInfo={basicInfo} />
      <Header type={type} category="basicInfo" />
      <div className={`border-2 border-t-0 ${type}-border md:py-3 md:flex md:justify-evenly`}>
        <PokeImage
          sprity={sprity}
          alt={name.en}
        />
        <InfoList basicInfo={basicInfo} />
      </div>
    </div>
  );
}

export default function PokeBasicInfo({ pokeKey }) {
  return (
    <Suspense fallback={<BasicInfoSkeleton />}>
      <BasicInfo pokeKey={pokeKey} />
    </Suspense>
  );
}
