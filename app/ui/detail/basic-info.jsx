import React from 'react';
import Image from 'next/image';

export default function BasicInfo({ no, name, sprity }) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${sprity}`;
  const noText = `No. ${no}`;
  return (
    <>
      <div className="flex gap-x-4">
        <span>{noText}</span>
        <span>{name.ko}</span>
      </div>
      <Image
        src={url}
        alt={name.en}
        width={250}
        height={250}
        priority
      />
    </>
  );
}
