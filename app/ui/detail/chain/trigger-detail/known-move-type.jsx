import React from 'react';
import typesKo from '@/app/translations/type';

export default function KnownMoveTypeCase({ value, language }) {
  const text = language === 'ko' ? `${typesKo[value]}타입 기술을 배우고` : `after ${value}-type move learned`;
  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
