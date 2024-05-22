import React from 'react';
import typesKo from '@/app/translations/type';

export default function KnownMoveTypeCase({ type, language }) {
  const text = language === 'ko' ? typesKo[type] : type;
  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
