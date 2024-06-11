'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';
import Header from './header';

function Ability({ name, flavorText, isHidden }) {
  const { language } = useLanguage();
  const nameText = language === 'ko' ? name.ko : name.en;
  const flavorTextText = language === 'ko' ? flavorText.ko : flavorText.en;
  const hiddenText = language === 'ko' ? '(숨겨진 특성)' : '(hidden ability)';

  const backgroundColor = isHidden ? 'bg-slate-100' : 'bg-white';

  return (
    <div className={`grid grid-cols-9 ${backgroundColor} gap-x-1 min-h-12`}>
      <h3 className="col-span-2 border-r text-center py-0.5 px-1 text-sm md:text-[15px] flex flex-col items-center justify-center">
        {nameText}
        {isHidden && <span className="text-xs md:text-sm">{hiddenText}</span>}
      </h3>
      <p className="col-span-7 text-pretty text-sm md:text-[15px] py-0.5 px-1 flex items-center">
        {flavorTextText}
      </p>
    </div>
  );
}

export default function Abilities({ abilities, type }) {
  const { language } = useLanguage();
  const title = language === 'ko' ? '특성' : 'ability';

  return (
    <div>
      <Header type={type} title={title} />
      <div className={`grid divide-y border-2 border-t-0 ${type}-border rounded-b-sm`}>
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
