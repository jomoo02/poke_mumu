import React from 'react';
import { MOVE_KO } from '@/app/translations/move';
import { getKoreanParticle } from '@/app/lib/utils';

export default function KnownMoveCase({ value, language }) {
  const moveText = language === 'ko' ? MOVE_KO[value] : value;
  const text = language === 'ko' ? `${getKoreanParticle(moveText)} 배운 상태에서` : 'knowing';
  const flexGapX = language === 'ko' ? 'gap-x-0' : 'gap-x-1';
  return (
    <div className={`flex justify-center items-center text-sm ${flexGapX}`}>
      <span>{moveText}</span>
      <span>{text}</span>
    </div>
  );
}
