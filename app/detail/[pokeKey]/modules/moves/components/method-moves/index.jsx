import React from 'react';
import MethodMovesTitle from './method-moves-title';
import MoveTable from './move-table';
import '../../styles/move-table.css';

export default function MethodMoves({
  method,
  moves,
  className,
}) {
  return (
    <div className={className}>
      <div className="px-1 md:px-4">
        <MethodMovesTitle method={method} />
      </div>
      <div className="flex px-1 md:px-4 overflow-x-auto">
        <MoveTable
          method={method}
          moves={moves}
        />
      </div>
    </div>
  );
}
