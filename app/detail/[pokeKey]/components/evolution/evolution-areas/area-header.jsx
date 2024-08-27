import React from 'react';
import { useLanguage } from '@/app/language-provider';

export default function AreaHeader({ title, type }) {
  const { language } = useLanguage();

  const localeTitle = title[language] || title.ko || 'area';

  return (
    <div
      className={
        `flex justify-center py-0.5 font-semibold items-center ${type} text-white text-sm`
      }
    >
      {localeTitle}
    </div>
  );
}
