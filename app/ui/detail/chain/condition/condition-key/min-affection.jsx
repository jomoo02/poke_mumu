import React from 'react';

const TEXT_GENERATORS = {
  ko: (value) => `절친도 ${value}단계 이상일 때`,
  en: (value) => `min affection ${value}`,
};

export default function MinAffectionCase({ value, language }) {
  const text = TEXT_GENERATORS[language](value);

  return (
    <span>
      {text}
    </span>
  );
}
