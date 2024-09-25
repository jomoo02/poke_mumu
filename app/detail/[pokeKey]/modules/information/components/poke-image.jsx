import React from 'react';
import Image from 'next/image';

export default function PokeImage({ sprity, alt }) {
  const basicUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const src = `${basicUrl}/${sprity}`;
  // const src = '/pokeball.svg';

  return (
    <div className="flex justify-center items-center py-3 md:py-0">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
