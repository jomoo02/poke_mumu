import React from 'react';
import Image from 'next/image';

export default function PokeImage({ sprity, alt }) {
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
