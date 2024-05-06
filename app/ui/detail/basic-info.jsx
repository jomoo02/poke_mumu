'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function BasicInfo({
  no, name, sprity, id, order,
}) {
  const exceptionOrder = [634, 723, 725, 810];
  const bascinUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const url = exceptionOrder.includes(Number(order)) ? `/${order}.png` : `${bascinUrl}/${sprity}`;
  const [imageUrl, setImageUrl] = useState(url);

  const handleImageError = () => setImageUrl(`${bascinUrl}/${id}.png`);

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
