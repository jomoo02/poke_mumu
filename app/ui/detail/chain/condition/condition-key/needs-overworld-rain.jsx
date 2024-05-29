import React from 'react';

const LANGUAGE_CONTENT = {
  en: 'during rain',
  ko: '비가 오는 필드',
};

export default function NeedsOverworldRainCase({ language }) {
  const text = LANGUAGE_CONTENT[language];

  return (
    <span>
      {text}
    </span>
  );
}
