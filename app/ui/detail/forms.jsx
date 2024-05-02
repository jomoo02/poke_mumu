'use client';

import React from 'react';
import Image from 'next/image';

const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export default function Forms({ forms }) {
  return (
    <div>
      <h3 className="text-2xl">다른 모습들</h3>
      <div className="flex gap-x-10">
        {forms.map(({ id, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={`${url}/${id}.png`}
              width={80}
              height={80}
              alt={id}
              priority
            />
            <div>{name.ko}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
