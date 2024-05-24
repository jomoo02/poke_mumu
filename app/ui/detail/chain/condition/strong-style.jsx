import React from 'react';
import { MOVE_KO } from '@/app/translations/move';
import { makeFirstUpperCase, getKoreanParticle } from '@/app/lib/utils';

export default function StrongStyleCase({ value, language }) {
  if (language === 'ko') {
    return (
      <div className="flex justify-center items-center text-sm">
        <span>{MOVE_KO[value]}</span>
        <span>{`${getKoreanParticle(MOVE_KO[value])} 강공으로 20번 사용`}</span>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center text-sm">
      <span>Use</span>
      <span>{makeFirstUpperCase(value)}</span>
      <span>in the strong style 20 times in LA only</span>
    </div>
  );
}
