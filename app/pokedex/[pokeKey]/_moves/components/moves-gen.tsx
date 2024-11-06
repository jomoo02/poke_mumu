import React from 'react';
import { GenMove } from '@/app/models/detail.type';
import { Type } from '@/app/data/pokeType';
import GroupButton from './group-button';
import MovesGenVersion from './moves-gen-version';
import useMovesGen from '../hooks/useMovesGen';

interface MovesGenProps {
  genMoves: GenMove;
  type: Type;
}

export default function MovesGen({
  genMoves,
  type,
}: MovesGenProps) {
  const {
    targetGenVersion,
    handleTargetVersion,
    genVersionMove,
    genVersions,
  } = useMovesGen(genMoves);

  return (
    <>
      <div className={`px-1 sm:px-2 lg:px-7 border-b-2 pt-3 ${type}-border`}>
        <GroupButton.Version
          versions={genVersions}
          type={type}
          targetVersion={targetGenVersion}
          handleTargetVersion={handleTargetVersion}
        />
      </div>
      <div className="px-1 xs:px-2 md:px-3 py-3 2xl:px-10">
        <MovesGenVersion
          key={targetGenVersion}
          versionMove={genVersionMove}
        />
      </div>
    </>
  );
}
