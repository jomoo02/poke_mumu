import React from 'react';

export default function MinHappinessCase({ language }) {
  const enText = 'high Friendship';
  // const koText = '친밀도가 높은 상태에서 레벨 업';
  const koText = '친밀도가 높은 상태';

  const text = language === 'ko' ? koText : enText;

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
