import React from 'react';
import Image from 'next/image';

export default function PokeImage({ id, alt }) {
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
