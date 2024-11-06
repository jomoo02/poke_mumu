'use client';

import React from 'react';
import { Type } from '@/app/data/pokeType';
import type { Moves } from '@/app/models/detail.type';
import GroupButton from './group-button';
import MovesGen from './moves-gen';
import useMoves from '../hooks/useMoves';

interface MoveListProps {
  moves: Moves;
  type: Type;
}

export default function MoveList({
  moves,
  type,
}: MoveListProps) {
  const {
    gens,
    targetGen,
    handleTargetGen,
    targetGenMoves,
  } = useMoves(moves);

  return (
    <>
      <div className={`flex gap-x-1.5 items-center px-2.5 lg:px-8 py-2.5 border-b-2 ${type}-border`}>
        <GroupButton.Gen
          type={type}
          gens={gens}
          targetGen={targetGen}
          setTargetGen={handleTargetGen}
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
