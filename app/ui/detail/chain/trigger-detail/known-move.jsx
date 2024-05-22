import React from 'react';
import { MOVE_KO } from '@/app/translations/move';

export default function KnownMoveCase({ move, language }) {
  const text = language === 'ko' ? MOVE_KO[move] : move;

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
