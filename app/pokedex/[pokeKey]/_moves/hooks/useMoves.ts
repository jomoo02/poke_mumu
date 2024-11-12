import { useState } from 'react';
import type { Moves } from '@/app/models/detail.type';

export default function useMoves(moves: Moves) {
  const gens = moves.map(({ gen }) => gen);

  const initialTargetGen = gens.at(-1) || 9;

  const [targetGen, setTargetGen] = useState(initialTargetGen);

  const targetGenMoves = moves.find(({ gen }) => gen === targetGen)!.genMoves;

  const handleTargetGen = (gen: number) => setTargetGen(gen);

  return {
    gens,
    targetGen,
    handleTargetGen,
    targetGenMoves,
  };
}
