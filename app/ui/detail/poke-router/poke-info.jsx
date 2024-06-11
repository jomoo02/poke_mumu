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
    <div className="flex items-center text-sm gap-x-2">
      <div className="capitalize ">{`no. ${no}`}</div>
      <div className="text-center">
        <span>{name[language]}</span>
        {form.en !== 'default' && <span>{`(${form[language]})`}</span>}
      </div>
      <Image
        src={imageUrl}
        alt={name.en}
        width={40}
        height={35}
        style={{ width: 40, height: 35 }}
        priority
        onError={handleImageError}
      />
    </div>
  );
}
