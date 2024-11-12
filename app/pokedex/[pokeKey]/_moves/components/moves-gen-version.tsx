import React from 'react';
import type { Move, VersionMove } from '@/app/models/detail.type';
import {
  checkVersionMoveEmpty,
  categorizeVersionMove,
} from '../utils/moves-gen-version';
import MethodMoves from './method-moves';
// import useNotExistVersion from '../hooks/useNotExistInVersion';
import { Method } from '../data/method';

function NotExistInVersion() {
  // const { text } = useNotExistVersion();
  const text = 'non';

  return (
    <div className="flex justify-center min-h-44 md:min-h-96 items-center py-3 px-2 font-semibold text-xl">
      {text}
    </div>
  );
}

function VersionMethodMoves({
  method,
  moves,
}: {
  method: Method,
  moves: Move[],
}) {
  if (!moves || moves.length === 0) {
    return null;
  }

  return (
    <MethodMoves
      method={method}
      moves={moves}
      className="overflow-x-hidden py-0.5 my-4 sm:my-3 lg:my-4"
    />
  );
}

export default function MovesGenVersion({
  versionMove,
}: {
  versionMove: VersionMove;
}) {
  if (checkVersionMoveEmpty(versionMove)) {
    return <NotExistInVersion />;
  }

  const {
    normalMoves,
    machineMoves,
  } = categorizeVersionMove(versionMove);

  return (
    <div className="flex flex-wrap xl:py-3">
      <div className="grid w-full xl:w-1/2">
        {normalMoves.map(({ method, moves }) => (
          <VersionMethodMoves
            key={method}
            method={method}
            moves={moves}
          />
        ))}
      </div>
      {(machineMoves && machineMoves.length > 0) && (
        <div className="grid w-full xl:w-1/2 xl:justify-end">
          {machineMoves.map(({ method, moves }) => (
            <VersionMethodMoves
              key={method}
              method={method}
              moves={moves}
            />
          ))}
        </div>
      )}
    </div>
  );
}
