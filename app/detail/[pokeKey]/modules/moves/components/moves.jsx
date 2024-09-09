'use client';

import React from 'react';
import useMoves from '../hooks/useMoves';
import ButtonGroup from './button-group';
import MovesGen from './moves-gen';

export default function Moves({ moves, type }) {
  const {
    gens,
    targetGen,
    updateTargetGen,
    targetGenMoves,
  } = useMoves(moves);

  return (
    <>
      <div className={`flex gap-x-1.5 items-center px-2.5 lg:px-8 py-2.5 border-b-2 ${type}-border`}>
        <ButtonGroup.Gen
          type={type}
          gens={gens}
          targetGen={targetGen}
          setTargetGen={updateTargetGen}
        />
      </div>
      <MovesGen
        key={targetGen}
        genMoves={targetGenMoves}
        type={type}
      />
    </>
  );
}
