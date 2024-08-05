'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';

export default function Ability({ name, flavorText, isHidden }) {
  const { language } = useLanguage();

  const localeHiddenAbilityText = {
    ko: '(숨겨진 특성)',
    en: '(hidden ability)',
  };

  const hiddenAbilityText = localeHiddenAbilityText[language] || localeHiddenAbilityText.ko;

  const backgroundColor = isHidden ? 'bg-slate-100' : 'bg-white';

  return (
    <div className={`grid grid-cols-9 ${backgroundColor} gap-x-1 min-h-12`}>
      <h3 className="col-span-2 border-r text-center py-0.5 px-1 text-sm md:text-[15px] flex flex-col items-center justify-center">
        {name[language] || name.ko}
        {isHidden && (
          <span className="text-xs md:text-sm">{hiddenAbilityText}</span>
        )}
      </h3>
      <p className="col-span-7 text-pretty text-sm md:text-[15px] p-1.5 md:px-3 flex items-center">
        {flavorText[language] || flavorText.ko}
      </p>
    </div>
  );
}
