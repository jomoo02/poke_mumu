import React from 'react';

const LANGUAGE_CONTENT = {
  ko: '아름다움 수치 MAX 상태에서',
  en: 'max Beauty',
};

export default function MinBeautyCase({ language }) {
  const text = LANGUAGE_CONTENT[language];

  return (
    <span>
      {text}
    </span>
  );
}
