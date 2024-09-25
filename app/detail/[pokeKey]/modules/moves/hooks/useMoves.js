import { useState } from 'react';

export default function useMoves(moves) {
  const gens = moves.map(({ gen }) => gen);

  const [targetGen, setTargetGen] = useState(gens.at(-1));

  const targetGenMoves = moves.find(({ gen }) => gen === targetGen)?.genMoves;

  const updateTargetGen = (gen) => setTargetGen(gen);

  return {
    gens,
    targetGen,
    updateTargetGen,
    targetGenMoves,
  };
}
