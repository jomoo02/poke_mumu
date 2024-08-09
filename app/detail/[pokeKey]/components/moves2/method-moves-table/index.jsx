import React, { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import sortMovesWithKey from '@/app/lib/move-sort';
import Move from './move';
import TableHeader from './table-header';

function SortedMoves({ moves, sortOrder, renderMoveFirstColumn, getMovesKey }) {
  const { key, asc } = sortOrder;

  const { language } = useLanguage();

  const sortedMoves = sortMovesWithKey(moves, key, language, asc);

  return (
    <div className="grid divide-y border-b">
      {sortedMoves.map((moveData) => (
        <Move
          key={getMovesKey(moveData)}
          move={moveData.move}
          renderColumn1={renderMoveFirstColumn && renderMoveFirstColumn(moveData)}
        />
      ))}
    </div>
  );
}

function MethodTitle({ titleObj }) {
  const { language } = useLanguage();

  const title = titleObj[language] || titleObj.ko;

  return (
    <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg min-w-[600px]">
      {title}
    </h3>
  );
}

export default function MethodMovesTable({
  moves,
  initialSortKey,
  titleObj,
  renderMoveFirstColumn,
  firstColumnInfo,
  getMovesKey,
}) {
  const [sortOrder, setSortOrder] = useState({ key: initialSortKey, asc: true });

  const handleTableHeaderClick = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });
  };

  return (
    <div className="overflow-hidden">
      <MethodTitle titleObj={titleObj} />
      <div className="flex">
        <div className="grid overflow-x-auto py-0.5">
          <TableHeader
            onTableHeaderClick={handleTableHeaderClick}
            sortOrder={sortOrder}
            firstColumnInfo={firstColumnInfo}
          />
          <SortedMoves
            moves={moves}
            sortOrder={sortOrder}
            renderMoveFirstColumn={renderMoveFirstColumn}
            getMovesKey={getMovesKey}
          />
        </div>
      </div>
    </div>
  );
}
