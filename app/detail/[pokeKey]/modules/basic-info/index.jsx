import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import Header from '../../components/header';
import PokeIdentifiers from './components/poke-identifiers';
import PokeImage from './components/poke-image';
import BasicInfo from './components/basic-info';

export default async function PokeBasicInfo({ pokeKey }) {
  const pokeInfo = await fetchPokeKey(pokeKey);

  if (!pokeInfo) {
    return null;
  }

  const {
    types,
    sprity,
    name,
  } = pokeInfo;

  const type = types[0];

  const headerTexts = {
    ko: '기본 정보',
    en: 'default info',
  };

  return (
    <div>
      <PokeIdentifiers pokeInfo={pokeInfo} />
      <Header
        type={type}
        headerTexts={headerTexts}
      />
      <div className={`border-2 border-t-0 ${type}-border md:py-3 md:flex md:justify-evenly`}>
        <PokeImage
          sprity={sprity}
          alt={name.en}
        />
        <BasicInfo pokeInfo={pokeInfo} />
      </div>
    </div>
  );
}
