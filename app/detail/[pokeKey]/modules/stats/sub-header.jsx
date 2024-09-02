'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';

export default function SubHeader({ type }) {
  const localeText = {
    ko: {
      baseText: '종족값',
      effortText: '노력치',
    },
    en: {
      baseText: 'base stat',
      effortText: 'effort',
    },
  };

  const { language } = useLanguage();

  const { baseText, effortText } = localeText[language] || localeText.ko;
  return (
    <div className={
      `${type} grid grid-cols-5 py-[3px] md:py-1.5 gap-x-1 sm:gap-x-3 text-sm text-center text-white font-semibold items-center capitalize border-t border-[#fafaf9]`
      }
    >
      <div />
      <div className="col-span-3">{baseText}</div>
      <div>{effortText}</div>
    </div>
  );
}
