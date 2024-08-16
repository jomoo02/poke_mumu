'use client';

import React from 'react';
import useTargetMoves from './hooks/useTargetMoves';
import GenMoves from './gen-moves';
import VersionMoves from './version-moves';
import TargetMoves from './target-moves';

export default function Top({ moves, type }) {
  const {
    gens,
    targetGen,
    setTargetGen,
    versions,
    targetVersion,
    setTargetVersion,
    versionMoves,
  } = useTargetMoves(moves);

  return (
    <>
      <GenMoves
        type={type}
        gens={gens}
        targetGen={targetGen}
        setTargetGen={setTargetGen}
      >
        <VersionMoves
          type={type}
          versions={versions}
          targetVersion={targetVersion}
          setTargetVersion={setTargetVersion}
        />
      </GenMoves>
      <div className="p-3 2xl:px-10">
        <TargetMoves key={targetVersion} versionMoves={versionMoves} />
      </div>

    </>
  );
}
