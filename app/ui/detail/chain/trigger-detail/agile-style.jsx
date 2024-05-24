import React from 'react';
import { MOVE_KO } from '@/app/translations/move';
import { makeFirstUpperCase } from '@/app/lib/utils';

export default function AgileStyleCase({ move, language }) {
  if (language === 'ko') {
    return (
      <div className="flex justify-center items-center text-sm">
        <span>{MOVE_KO[move]}</span>
        <span>를 속공으로 20번 사용</span>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center text-sm">
      <span>Use</span>
      <span>{makeFirstUpperCase(move)}</span>
      <span>in the agile style 20 times in Hisui</span>
    </div>
  );
}
