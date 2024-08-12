// import './table.css';
import React from 'react';
import { useLanguage } from '@/app/language-provider';
import sortMovesWithKey from '@/app/lib/move-sort';
import useTableHeadItmes from '../hooks/useTableHeadItems';
// import useTableTitle from '../hooks/useTableTitle';
import Table from '../table';

export default function MethodMoves({
  moves,
  renderMoveFirstColumn,
  firstColumnInfo,
  renderFn,
}) {
  const {
    items,
    handleTableHeadClick,
    sortOrder,
  } = useTableHeadItmes(firstColumnInfo);

  const { key, asc } = sortOrder;

  const { language } = useLanguage();

  const sortedMoves = sortMovesWithKey(moves, key, language, asc);

  return (
    <div className="flex min-w-[600px] max-w-[600px]">
      <div className="grid overflow-x-auto py-0.5">
        <Table
          columns={items}
          renderFn={renderFn}
          className="grid overflow-x-auto py-0.5"
        >
          <Table.Head selectKey={key} isAsc={asc} handleTableHeadClick={handleTableHeadClick} />

          {sortedMoves.map((moveData) => (
            <Table.Row
              key={moveData.key}
              move={moveData}
              className="flex h-9 items-center"
            />
          ))}
        </Table>
      </div>
    </div>
  );
}
