import React from 'react';
import useMoveTableHead from '../../hooks/useMoveTableHead';
import useMoveTableMoves from '../../hooks/useMoveTableMoves';
import MoveTableRow from './move-table-row';
import MoveTableHead from './move-table-head';

export default function MoveTable({
  moves,
  method,
}) {
  const {
    headItems,
    handleHeadItemClick,
    selectedKey,
    isAsc,
  } = useMoveTableHead(method);

  const {
    tableMoves,
    tableMovesMapKeyFn,
  } = useMoveTableMoves(moves, selectedKey, isAsc, method);

  return (
    <div>
      <MoveTableHead
        headItems={headItems}
        selectedKey={selectedKey}
        isAsc={isAsc}
        onClickHeadItem={handleHeadItemClick}
      />
      {tableMoves.map((move) => (
        <MoveTableRow
          key={tableMovesMapKeyFn(move)}
          move={move}
          headItems={headItems}
        />
      ))}
    </div>
  );
}
