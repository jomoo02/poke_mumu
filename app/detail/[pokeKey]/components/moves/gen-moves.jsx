'use client';

import React from 'react';
import useGenMoves from './hooks/useGenMoves';
import ButtonGroup from './button-group';
import VersionMoves from './version-moves';

export default function GenMoves({ moves, type }) {
  const {
    title,
    gens,
    targetGen,
    updateTargetGen,
    targetGenMoves,
  } = useGenMoves(moves);

  return (
    <>
      <div className={`flex gap-x-1.5 items-center px-2.5 lg:px-8 py-2.5 border-b-2 ${type}-border`}>
        {/* <div className="text-sm font-medium pr-2 text-nowrap">
          {title}
        </div> */}
        <ButtonGroup.Gen
          type={type}
          gens={gens}
          targetGen={targetGen}
          setTargetGen={updateTargetGen}
        />
      </div>
      <VersionMoves
        key={targetGen}
        genMoves={targetGenMoves}
        type={type}
      />
    </>
  );
}
