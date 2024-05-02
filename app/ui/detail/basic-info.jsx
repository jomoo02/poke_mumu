'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function BasicInfo({
  no, name, sprity, id,
}) {
  const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const [imageUrl, setImageUrl] = useState(
    `${url}/${sprity}`,
  );

  const handleImageError = () => setImageUrl(`${url}/${id}.png`);

  const noText = `No. ${no}`;
  return (
    <>
      <div className="flex gap-x-4">
        <span>{noText}</span>
        <span>{name.ko}</span>
      </div>
      <Image
        src={imageUrl}
        alt={name.en}
        width={250}
        height={250}
        onError={handleImageError}
        priority
      />
    </>
  );
}
