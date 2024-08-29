import React from 'react';
import { useLanguage } from '@/app/language-provider';
import { useMethod } from './method-move.context';
import useMethodMovesHead from '../hooks/useMethodMovesHead';
import { getMovesMapKeyFnWithMethod } from '../utils/method-moves';
import sortMovesByKey from '../utils/method-moves-sort';
import Head from './move-table-head';
import Row from './move-table-row';

export default function MoveTable({ moves }) {
  const method = useMethod();

  const {
    headItems,
    selectKey,
    isAsc,
    handleHeadItemClick,
  } = useMethodMovesHead(method);

  const { language } = useLanguage();

  const sortedMoves = sortMovesByKey(moves, selectKey, language, isAsc);

  const sortedMovesKeyFn = getMovesMapKeyFnWithMethod(method);

  return (
    <div>
      <Head
        columns={headItems}
        selectKey={selectKey}
        isAsc={isAsc}
        handleHeadItemClick={handleHeadItemClick}
      />
      {sortedMoves.map((move) => (
        <Row
          key={sortedMovesKeyFn(move)}
          item={move}
          columns={headItems}
        />
      ))}
    </div>
  );
}
