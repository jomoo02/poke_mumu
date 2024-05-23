import React from 'react';

export default function RecoilDamageCase({ damage, language }) {
  const text = language === 'ko' ? (
    `데미지${damage}`
  ) : `damage ${damage}`;

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
