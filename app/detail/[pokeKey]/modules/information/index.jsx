import React from 'react';
import './styles/information.css';
import { fetchPokeKey } from '@/app/api/data';
import Header from '../../components/header';
import { headerKeys } from '../../data/header';
import Information from './components/information';
import PokeImage from './components/poke-image';
import PokeIdentifiers from './components/poke-identifiers';

export default async function PokeInformation({ pokeKey }) {
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

  const headerKey = headerKeys.information;

  return (
    <div>
      <PokeIdentifiers pokeInfo={pokeInfo} />
      <Header
        type={type}
        headerKey={headerKey}
      />
      <div className={`border-2 border-t-0 ${type}-border grid xl:grid-cols-3 items-center`}>
        <div className="py-10">
          <PokeImage
            sprity={sprity}
            alt={name.en}
          />
        </div>

        <div className="xl:col-span-2">
          <Information pokeInfo={pokeInfo} />
        </div>
      </div>
    </div>
  );
}
