'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';

export default function ThemeToggleButton() {
  const { language, setLanguage } = useLanguage();

  const handleToggleBtnClick = () => (language === 'ko' ? setLanguage('en') : setLanguage('ko'));

  return (
    <div className="text-white font-semibold text-lg">
      <button
        onClick={handleToggleBtnClick}
        type="button"
      >
        {language}
      </button>
    </div>
  );
}
