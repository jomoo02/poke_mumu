import React from 'react';
import typesKo from '@/app/translations/type';

export default function KnownMoveTypeCase({ type, language }) {
  const text = language === 'ko' ? `${typesKo[type]}타입 기술을 배우고` : `after ${type}-type move learned`;
  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
