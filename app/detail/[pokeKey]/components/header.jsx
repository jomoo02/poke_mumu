'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';

const localeTitles = {
  abilities: {
    ko: '특성',
    en: 'ability',
  },
  basicInfo: {
    ko: '기본 정보',
    en: 'default info',
  },
  form: {
    ko: '의 모습',
    en: "'s form",
  },
  forms: {
    ko: '의 모습들',
    en: "'s forms",
  },
};

export default function Header({ category = 'basicInfo', type = 'normal', text }) {
  const { language } = useLanguage();

  const title = localeTitles[category][language] || localeTitles.basicInfo.ko;

  return (
    <div className={`${type} rounded-t-md`}>
      <h2
        className="text-white text-center font-semibold py-[3px] md:py-1.5 text-sm capitalize"
      >
        {text && text[language]}
        {title}
      </h2>
    </div>
  );
}
