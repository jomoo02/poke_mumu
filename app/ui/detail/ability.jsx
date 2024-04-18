'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';

function Ability({ name, flavorText, isHidden }) {
  const { language } = useLanguage();
  const nameText = language === 'ko' ? name.ko : name.en;
  const flavorTextText = language === 'ko' ? flavorText.ko : flavorText.en;

  return (
    <div className={
      `grid grid-cols-9 ${isHidden ? 'bg-slate-100' : 'bg-white'}`
    }
    >
      <span className="col-span-2 border-r p-1 text-sm md:text-base">{nameText}</span>
      <p className="col-span-7 p-1 flex items-center text-sm md:text-base">{flavorTextText}</p>
    </div>
  );
}

export default function Abilities({ abilities }) {
  return (
    <div>
      <h3 className="text-2xl my-4">
        특성
      </h3>
      <div className="grid divide-y">
        {abilities.map(({ name, flavorText, isHidden }) => (
          <Ability
            key={name.en}
            name={name}
            flavorText={flavorText}
            isHidden={isHidden}
          />
        ))}
      </div>
    </div>
  );
}
