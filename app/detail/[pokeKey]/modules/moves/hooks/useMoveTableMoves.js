import { useLanguage } from '@/app/language-provider';
import sortMovesByKey from '../utils/sortMethodMoves';
import { getMethods } from '../utils/methodUtils';

function setSortedMovesMapKey(method) {
  const { level } = getMethods();

  const levelMethodKeyFn = (move) => `${move.level}-${move.move.name.en}`;

  const defaultKeyFn = (move) => `${move.move.name.en}`;

  const keyFn = method === level ? levelMethodKeyFn : defaultKeyFn;

  return keyFn;
}

export default function useMoveTableMoves(
  moves,
  selectedKey,
  isAsc,
  method,
) {
  const { language } = useLanguage();

  const sortedMoves = sortMovesByKey({
    moves,
    selectedKey,
    language,
    isAsc,
  });

  const sortedMovesMapKeyFn = setSortedMovesMapKey(method);

  return {
    tableMoves: sortedMoves,
    tableMovesMapKeyFn: sortedMovesMapKeyFn,
  };
}
