import React from 'react';

export default function NeedsOverworldRainCase({ language }) {
  const text = language === 'ko' ? (
    '비가오는 필드'
  ) : 'during rain';

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
