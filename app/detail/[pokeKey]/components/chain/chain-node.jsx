import React from 'react';
import Image from 'next/image';

function PokeImage({ id, alt }) {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="w-16 h-16 md:w-20 relative md:h-20">
      <Image
        src={src}
        alt={alt}
        fill
        size="70px"
        priority
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

export default function ChainNode({
  detail, name, id, pokeKey, maxDepth, maxWidth, to,
}) {
 

  return (
    <div className={maxWidth === 8 ? '': 'md:flex'}>
      <div className="flex justify-center">
        <div className={`flex flex-col justify-center items-center ${maxWidth === 8 ? '' : 'md:flex-row'}`}>
          {detail.length > 0 &&}
        </div>
      </div>
    </div>
  )
}