import React from 'react';
import './styles/information.css';
import { getPoke, getPokeDetail } from '../utils/get';
import { headerKeys } from '../data/header';
import Information from './components/information';
import Header from '../components/header';
import PokeIdentifiers from './components/poke-identifiers';
import PokeImage from './components/poke-image';

interface PokeInformationProps {
  pokeKey: string;
}

export default async function PokeInformation({ pokeKey }: PokeInformationProps) {
  const [poke, pokeDetail] = await Promise.all([
    getPoke(pokeKey),
    getPokeDetail(pokeKey),
  ]);

  if (!poke || !pokeDetail) {
    return null;
  }

  const {
    types,
    name,
    pokedexNumbers,
    sprite,
  } = poke;

  const type = types[0];

  const {
    breeding,
    detail,
  } = pokeDetail;

  if (!breeding || !detail || !pokedexNumbers) {
    return null;
  }

  const headerKey = headerKeys.information;

  return (
    <div>
      <PokeIdentifiers poke={poke} />
      <Header
        type={type}
        headerKey={headerKey}
      />
      <div className={`border-2 border-t-0 ${type}-border grid xl:grid-cols-3 items-center`}>
        <div className="py-10">
          <PokeImage
            sprite={sprite}
            alt={name.en}
          />
        </div>
        <div className="xl:col-span-2 xl:py-4">
          <Information poke={poke} pokeDetail={pokeDetail} />
        </div>
      </div>
    </div>
  );
}
