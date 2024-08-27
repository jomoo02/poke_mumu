import React from 'react';
import { MethodMovesProvider } from './method-move.context';
import Title from './title';
import MoveTable from './move-table';

function MethodMovesContainer({ method, className, children }) {
  if (!method) {
    return null;
  }

  return (
    <MethodMovesProvider method={method}>
      <div className={`${className} `}>
        {children}
      </div>
    </MethodMovesProvider>
  );
}

const MethodMoves = Object.assign(MethodMovesContainer, {
  Title,
  MoveTable,
});

export default MethodMoves;
