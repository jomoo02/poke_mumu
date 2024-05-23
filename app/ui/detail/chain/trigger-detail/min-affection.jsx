import React from 'react';

export default function MinAffectionCase({ value, language }) {
  const text = language === 'ko' ? `절친도 ${value}단계 이상` : `min affection ${value}`;
  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
