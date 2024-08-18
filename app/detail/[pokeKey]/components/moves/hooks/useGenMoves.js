import { useState } from 'react';
import { useLanguage } from '@/app/language-provider';

function useGenMovesTitle() {
  const { language } = useLanguage();

  const localeOtherGenText = {
    ko: '다른 세대',
    en: 'In other generations',
  };

  const title = localeOtherGenText[language] || localeOtherGenText.ko;

  return title;
}

export default function useGenMoves(moves) {
  const title = useGenMovesTitle();

  const gens = moves.map(({ gen }) => gen);

  const [targetGen, setTargetGen] = useState(gens.at(-1));

  const targetGenMoves = moves.find(({ gen }) => gen === targetGen)?.genMoves;

  const updateTargetGen = (gen) => setTargetGen(gen);

  return {
    title,
    gens,
    targetGen,
    updateTargetGen,
    targetGenMoves,
  };
}
