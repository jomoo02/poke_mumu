import React from 'react';
import ButtonGroup from './button-group';
import MovesGenVersion from './moves-gen-version';
import useMovesGen from '../hooks/useMovesGen';

export default function MovesGen({ genMoves, type }) {
  const {
    genVersions,
    genVersionMoves,
    targetGenVersion,
    updateTargetGenVersion,
  } = useMovesGen(genMoves);

  return (
    <>
      <div className={`px-1 sm:px-2 lg:px-7 border-b-2 pt-3 ${type}-border`}>
        <ButtonGroup.Version
          versions={genVersions}
          type={type}
          targetVersion={targetGenVersion}
          setTargetVersion={updateTargetGenVersion}
        />
      </div>
      <div className="px-1 xs:px-2 md:px-3 py-3 2xl:px-10">
        <MovesGenVersion
          key={targetGenVersion}
          versionMoves={genVersionMoves}
        />
      </div>
    </>
  );
}
