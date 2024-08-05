'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';

const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

const specialIdCase = {
  666: '/vivillon-icy-snow.png',
  '666-meadow': '/vivillon-meadow.png',
};

export default function Form({ id, name }) {
  const { language } = useLanguage();

  const src = specialIdCase[id] || `${url}/${id}.png`;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-20 h-20 relative">
        <Image
          src={src}
          fill
          alt={id}
          priority
        />
      </div>
      <div className="text-center text-sm font-medium capitalize">
        {name[language] || name.ko}
      </div>
    </div>
  );
}
