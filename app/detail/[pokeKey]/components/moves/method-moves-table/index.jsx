import './table.css';
import React from 'react';
import { useLanguage } from '@/app/language-provider';
import sortMovesWithKey from '@/app/lib/move-sort';
import useTableHeadItmes from '../hooks/useTableHeadItems';
import useTableTitle from '../hooks/useTableTitle';
import Move from './move';
import TableHead from './table-head';

function SortedMoves({
  moves,
  sortOrder,
  renderMoveFirstColumn,
}) {
  const { key, asc } = sortOrder;

  const { language } = useLanguage();

  const sortedMoves = sortMovesWithKey(moves, key, language, asc);

  return (
    <div className="grid divide-y border-b">
      {sortedMoves.map((moveData) => (
        <Move
          key={moveData.key}
          move={moveData.move}
        >
          {renderMoveFirstColumn && renderMoveFirstColumn(moveData)}
        </Move>
      ))}
    </div>
  );
}

function Table({
  moves,
  renderMoveFirstColumn,
  firstColumnInfo,
}) {
  const {
    items,
    handleTableHeadClick,
    sortOrder,
  } = useTableHeadItmes(firstColumnInfo);

  return (
    <div className="flex min-w-[600px] max-w-[600px]">
      <div className="grid overflow-x-auto py-0.5">
        <TableHead
          onTableHeadClick={handleTableHeadClick}
          sortKey={sortOrder.key}
          isAsc={sortOrder.asc}
          items={items}
        />
        <SortedMoves
          moves={moves}
          sortOrder={sortOrder}
          renderMoveFirstColumn={renderMoveFirstColumn}
        />
      </div>
    </div>
  );
}

function Title({ method }) {
  const { title } = useTableTitle(method);

  return (
    <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg">
      {title}
    </h3>
  );
}

const MethodMovesTable = {
  Table,
  Title,
};

export default MethodMovesTable;
