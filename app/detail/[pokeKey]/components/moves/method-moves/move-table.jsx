import React from 'react';
import { useLanguage } from '@/app/language-provider';
import { useMethod } from './method-move.context';
import useMethodMovesHead from '../hooks/useMethodMovesHead';
import Table from '../table';
import { renderHeadColumnWith, renderMoveCellWith } from './move-table.utils';
import { getMovesMapKeyFnWithMethod } from '../utils/method-moves';
import sortMovesByKey from '../utils/method-moves-sort';

export default function MoveTable({ moves }) {
  const method = useMethod();

  const {
    headItems,
    selectKey,
    isAsc,
    handleHeadItemClick,
  } = useMethodMovesHead(method);

  const renderHeadColumn = renderHeadColumnWith(selectKey, isAsc, handleHeadItemClick);

  const { language } = useLanguage();

  const sortedMoves = sortMovesByKey(moves, selectKey, language, isAsc);

  const sortedMovesKeyFn = getMovesMapKeyFnWithMethod(method);

  return (
    <Table
      columns={headItems}
    >
      <Table.Head
        renderHeadCell={renderHeadColumn}
        headClassName="flex border-y border-zinc-700/80 divide-zinc-700/80 text-sm md:text-base items-stretch h-[2.4rem] font-medium divide-x"
      />
      {sortedMoves.map((move) => (
        <Table.Row
          key={sortedMovesKeyFn(move)}
          item={move}
          rowClassName="flex h-9 items-center items-stretch"
          renderRowFn={renderMoveCellWith}
        />
      ))}
    </Table>
  );
}
