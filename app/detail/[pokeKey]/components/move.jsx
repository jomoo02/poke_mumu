import React from 'react';
import { useLanguage } from '@/app/language-provider';

export default function Move({ move, className }) {
  const { language } = useLanguage();

  const moveName = move?.name[language] || move.name.ko;
  return (
    <div
      className={`${className} text-base font-semibold text-slate-700 px-2.5`}
    >
      {moveName}
    </div>
  );
}
