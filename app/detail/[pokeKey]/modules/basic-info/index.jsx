import React from 'react';
import './styles/basicInfo.css';
import { fetchPokeKey } from '@/app/api/data';
import Header from '../../components/header';
import PokeIdentifiers from './components/poke-identifiers';
import PokeImage from './components/poke-image';
import BasicInfo from './components/basic-info';
import { headerKeys } from '../../data/header';

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

  const headerKey = headerKeys.basicInfo;

  return (
    <div>
      <PokeIdentifiers pokeInfo={pokeInfo} />
      <Header
        type={type}
        headerKey={headerKey}
      />
      <div className={`border-2 border-t-0 ${type}-border grid xl:grid-cols-3 items-center`}>
        {/* <PokeImage
          sprity={sprity}
          alt={name.en}
        /> */}
        <div className="col-span-2">
          <BasicInfo pokeInfo={pokeInfo} />
        </div>
      </div>
    </div>
  );
}
