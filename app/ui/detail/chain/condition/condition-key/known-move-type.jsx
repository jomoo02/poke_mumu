import React from 'react';
import typesKo from '@/app/translations/type';

const TEXT_GENERATORS = {
  en: (type) => `after ${type}-type move learned`,
  ko: (type) => `${typesKo[type]}타입 기술을 배우고`,
};

export default function KnownMoveTypeCase({ value, language }) {
  const text = TEXT_GENERATORS[language](value);

  return (
    <span>
      {text}
    </span>
  );
}
