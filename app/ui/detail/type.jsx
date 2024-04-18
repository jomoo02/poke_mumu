'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';
import typesKo from '@/app/translations/type';

function Type({ type }) {
  const { language } = useLanguage();
  const typeText = language === 'ko' ? typesKo[type] : type;
  return (
    <div
      key={type}
      className={
        `w-12 flex justify-center items-center rounded-md text-white font-bold ${type}`
      }
    >
      {typeText}
    </div>
  );
}

// function Compatibility({ types }) {

// }

export default function Types({ types }) {
  return (
    <div className="py-4">
      <h3 className="text-2xl my-2">
        타입
      </h3>
      <div className="flex gap-x-3.5">
        {types.map((type) => (
          <Type key={type} type={type} />
        ))}
      </div>
      <h3 className="text-xl my-1">
        타입 상성
      </h3>
    </div>
  );
}
