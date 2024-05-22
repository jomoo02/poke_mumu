import React from 'react';
import typesKo from '@/app/translations/type';
import { makeFirstUpperCase } from '@/app/lib/utils';

export default function PartyTypeCase({ type, language }) {
  const text = language === 'ko' ? typesKo[type] : makeFirstUpperCase(type);

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
