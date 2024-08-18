import React from 'react';
import useVersionMoves from './hooks/useVersionMoves';
import ButtonGroup from './button-group';
import TargetMoves from './target-moves';

export default function VersionMoves({ genMoves, type }) {
  const {
    versions,
    targetVersion,
    updateTargetVersion,
    versionMoves,
  } = useVersionMoves(genMoves);

  return (
    <>
      <div className={`px-1 sm:px-2 lg:px-7 border-b-2 pt-3 ${type}-border`}>
        <ButtonGroup.Version
          versions={versions}
          type={type}
          targetVersion={targetVersion}
          setTargetVersion={updateTargetVersion}
        />
      </div>

      <div className="px-1 xs:px-2 md:px-3 py-3 2xl:px-10">
        <TargetMoves
          key={targetVersion}
          versionMoves={versionMoves}
        />
      </div>
    </>
  );
}
