import React from 'react';
import { useLanguage } from '@/app/language-provider';

export default function Move({ move, className }) {
  const { language } = useLanguage();

  const moveName = move?.name[language] || move.name.ko || '기술';

  return (
    <div
      className={`${className} text-base font-semibold text-slate-700 px-2.5 flex items-center`}
    >
      {moveName}
    </div>
  );
}
