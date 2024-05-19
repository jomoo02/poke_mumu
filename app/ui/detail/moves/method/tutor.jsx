import React from 'react';
import MethodMoves from './method-moves';

export default function TutorMethodMoves({ moves }) {
  const methodText = 'NPC로부터 배울 수 있는 기술';
  const sortedMoves = [...moves].sort((a, b) => a.move.type.localeCompare(b.move.type));

  return (
    <MethodMoves
      title={methodText}
      moves={sortedMoves}
      method="tutor"
    />
  );
}
