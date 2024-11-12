import type { Move } from '@/app/models/detail.type';
import { useLanguage } from '@/app/language-provider';
import { CellKey } from '../data/cellKey';
import { Method } from '../data/method';

const compareFunctions: Record<CellKey, (a: Move, b: Move, language?: 'en' | 'ko') => number> = {
  level: (a, b) => (a.level ?? -1) - (b.level ?? -1),
  type: (a, b) => a.move.type.localeCompare(b.move.type),
  damageClass: (a, b) => a.move.damage_class.localeCompare(b.move.damage_class),
  name: (a, b, language = 'en') => a.move.name[language].localeCompare(b.move.name[language]),
  tm: (a, b) => (a.machine?.number ?? -1) - (b.machine?.number ?? -1),
  tr: (a, b) => (a.machine?.number ?? -1) - (b.machine?.number ?? -1),
  hm: (a, b) => (a.machine?.number ?? -1) - (b.machine?.number ?? -1),
  pre: (a, b) => {
    const aSumIds = (a.preIds ?? []).reduce((acc, cur) => acc + Number(cur), 0);
    const bSumIds = (b.preIds ?? []).reduce((acc, cur) => acc + Number(cur), 0);
    return aSumIds - bSumIds;
  },
  power: (a, b) => (a.move.power ?? -1) - (b.move.power ?? -1),
  accuracy: (a, b) => (a.move.accuracy ?? -1) - (b.move.accuracy ?? -1),
};

function sortArray(
  arr: Move[],
  compareFn: (a: Move, b: Move) => number,
  isAsc: boolean,
): Move[] {
  const sortedArray = [...arr].sort(compareFn);
  return isAsc ? sortedArray : sortedArray.reverse();
}

function sortMovesByCellKey(
  moves: Move[],
  selectedKey: CellKey,
  language: 'en' | 'ko',
  isAsc: boolean,
) {
  const compareFn = compareFunctions[selectedKey];
  return compareFn ? sortArray(moves, (a, b) => compareFn(a, b, language), isAsc) : moves;
}

export default function useMethodMoveTableMove(
  moves: Move[],
  selectedKey: CellKey,
  isAsc: boolean,
  method: Method,
) {
  const { language } = useLanguage();

  const sortedMoves = sortMovesByCellKey(
    moves,
    selectedKey,
    language,
    isAsc,
  );

  const moveKeyFn = method === 'level'
    ? (move: Move) => `${move.level}-${move.move.name.en}`
    : (move: Move) => `${move.move.name.en}`;

  return {
    moveKeyFn,
    tableMoves: sortedMoves,
  };
}
