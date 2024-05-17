import React from 'react';
import Header from '../header';
import Move from '../move';

export default function MethodMoves({
  title, method, moves, HeaderContent, MoveContent,
}) {
  if (moves.length === 0) {
    return null;
  }

  const getKey = (moveData) => {
    if (method === 'levelUp') {
      return `${moveData.move.name.en}-${moveData.level}`;
    }
    return moveData.move.name.en;
  };

  return (
    <div>
      <h4 className="text-lg md:text-xl font-medium">
        {title}
      </h4>
      <div className="grid gap-y-0.5">
        <Header>
          {HeaderContent && <HeaderContent />}
        </Header>
        {moves.map((moveData) => (
          <Move key={getKey(moveData)} move={moveData.move}>
            {MoveContent && <MoveContent moveData={moveData} />}
          </Move>
        ))}
      </div>
    </div>
  );
}
