import React from 'react';
import {
  checkVersionMovesEmpty,
  normalizeVersionMoves,
} from '../utils/movesGenVersionUtils';
import MethodMoves from './method-moves';
import useNotExistVersion from '../hooks/useNotExistInVersion';

function NotExistInVersion() {
  const { text } = useNotExistVersion();

  return (
    <div className="flex justify-center min-h-44 md:min-h-96 items-center py-3 px-2 font-semibold text-xl">
      {text}
    </div>
  );
}

function VersionMethodMoves({ method, moves }) {
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

export default function MovesGenVersion({ versionMoves }) {
  if (checkVersionMovesEmpty(versionMoves)) {
    return <NotExistInVersion />;
  }

  const {
    normalMoves,
    machineMoves,
  } = normalizeVersionMoves(versionMoves);

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
