import React from 'react';

export default function MinBeautyCase({ language }) {
  const text = language === 'ko' ? '아름다움 수치 MAX 상태' : 'max Beauty';
  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
