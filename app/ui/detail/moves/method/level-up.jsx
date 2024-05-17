import React from 'react';
import MethodMoves from './method-moves';

function Header() {
  return (
    <div className="flex items-center">
      level
    </div>
  );
}

function Content({ moveData: { level } }) {
  return (
    <div className="flex items-center text-xs md:text-base">
      {level === 0 ? '진화' : String(level)}
    </div>
  );
}

export default function LevelUpMethodMoves({ moves }) {
  const methodText = '레벨 업으로 익히는 기술';
  const sortedMoves = [...moves].sort((a, b) => a.level - b.level);

  return (
    <MethodMoves
      title={methodText}
      moves={sortedMoves}
      method="levelUp"
      HeaderContent={Header}
      MoveContent={Content}
    />
  );
}
