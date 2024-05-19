import React from 'react';
import MethodMoves from './method-moves';

export default function EggMethodMoves({ moves }) {
  const methodText = '교배를 통해 유전 받을 수 있는 기술';
  const sortedMoves = [...moves].sort((a, b) => a.move.type.localeCompare(b.move.type));

  return (
    <MethodMoves
      title={methodText}
      moves={sortedMoves}
      method="egg"
    />
  );
}
