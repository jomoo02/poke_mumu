'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';

export default function PokeInfo({ info }) {
  const sprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons';
  const alterSprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  const {
    sprity, name, form, no,
  } = info;
  const [imageUrl, setImageUrl] = useState(`${sprityUrl}/${sprity}`);

  const { language } = useLanguage();

  const handleImageError = () => {
    setImageUrl(`${alterSprityUrl}/${sprity}`);
  };

  return (
    <div className="flex items-center text-sm gap-x-2 py-1 flex-col justify-center">
      <Image
        src={imageUrl}
        alt={name.en}
        width={45}
        height={35}
        style={{ width: 45, height: 35 }}
        priority
        onError={handleImageError}
      />
      <div className="flex gap-x-1 text-sm md:text-base items-center capitalize">
        <span className="capitalize text-slate-500 font-semibold text-sm">{`no. ${no}`}</span>
        <span className="text-center text-slate-600/90 font-semibold text-[15px]">
          {name[language] || name.en}

        </span>
      </div>
      {form.en !== 'default' && (
        <span className="text-slate-600 font-semibold text-xs leading-3">
          {`(${form[language]})`}
        </span>
      )}
    </div>
  );
}
