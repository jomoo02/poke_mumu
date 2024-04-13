'use client';

import React from 'react';
import { useLanguage } from '../language-provider';

export default function ThemeToggleButton() {
  const { language, setLanguage } = useLanguage();
  const handleToggle = () => (language === 'ko' ? setLanguage('en') : setLanguage('ko'));

  return (
    <div className="text-white font-semibold text-lg">
      <button onClick={handleToggle} type="button">
        {language}
      </button>
    </div>
  );
}
