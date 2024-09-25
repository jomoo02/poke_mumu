import React from 'react';
import Image from 'next/image';
import { useChainMaxWidth } from './chain.context';
import ChainPokeDetail from './chain-poke-detail';
import ChainPokeLink from './chain-poke-link';

function PokeImage({ id, alt }) {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="w-16 h-16 md:w-20 relative md:h-20">
      <Image
        src={src}
        // src="/pokeball.svg"
        alt={alt}
        fill
        size="70px"
        priority
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

export default function ChainPoke({ pokeInfo }) {
  const {
    pokeKey,
    id,
    detail,
    name,
  } = pokeInfo;

  const maxWidth = useChainMaxWidth();

  return (
    <div className={`flex flex-col justify-center items-center ${maxWidth === 8 ? '' : 'md:flex-row'}`}>
      <ChainPokeDetail detail={detail} />
      <div className="min-w-20 max-w-24 xs:w-24 md:w-24 flex flex-col items-center justify-center py-4">
        <PokeImage id={id} alt={name.en} />
        <ChainPokeLink pokeKey={pokeKey} name={name} />
      </div>
    </div>
  );
}
