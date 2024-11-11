import React from 'react';
import { Move } from '@/app/models/detail.type';
import TableCell from './table-cell';
import HeadCell from './table-head';
import useMethodMoveTableHead from '../../hooks/useMethodMoveTableHead';
import useMethodMoveTableMove from '../../hooks/useMethodMoveTableMove';
import useMethodMoveTitle from '../../hooks/useMethodMoveTitle';
import { Method } from '../../data/method';

interface MethodMoveTitleProps {
  method: Method;
}

interface MethodMoveTableProps {
  moves: Move[];
  method: Method;
}

interface MethodMovesProps extends MethodMoveTableProps {
  className?: string;
}

function MethodMoveTitle({
  method,
}: MethodMoveTitleProps) {
  const { title } = useMethodMoveTitle(method);

  return (
    <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg">
      {title}
    </h3>
  );
}

function MethodMoveTable({
  moves,
  method,
}: MethodMoveTableProps) {
  const {
    headItems,
    handleHeadItem,
    selectedKey,
    isAsc,
  } = useMethodMoveTableHead(method);

  const {
    tableMoves,
    moveKeyFn,
  } = useMethodMoveTableMove(moves, selectedKey, isAsc, method);

  return (
    <div>
      <div className="flex border-y border-zinc-700/80 divide-zinc-700/80 text-sm md:text-base items-stretch h-[2.4rem] font-medium divide-x">
        {headItems.map((headItem) => (
          <HeadCell
            key={headItem.key}
            handleHeadItem={handleHeadItem}
            selectedKey={selectedKey}
            isAsc={isAsc}
            headItem={headItem}
          />
        ))}
      </div>
      {tableMoves.map((move) => (
        <div
          key={moveKeyFn(move)}
          className="flex h-9 items-stretch"
        >
          {headItems.map(({ key, className }) => (
            <TableCell
              key={key}
              className={className}
              move={move}
              cellKey={key}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function MethodMoves({
  method,
  moves,
  className,
}: MethodMovesProps) {
  return (
    <div className={className}>
      <div className="px-1 md:px-4">
        <MethodMoveTitle method={method} />
      </div>
      <div className="flex px-1 md:px-4 overflow-x-auto">
        <MethodMoveTable
          method={method}
          moves={moves}
        />
      </div>
    </div>
  );
}
