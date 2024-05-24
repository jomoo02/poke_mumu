import React from 'react';

export default function RecoilDamageCase({ damage, language }) {
  const text = language === 'ko' ? (
    `누적 반동 데미지 ${damage} 이상 입은 상태에서`
  ) : `after losing at least ${damage} HP from recoil damage`;

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
