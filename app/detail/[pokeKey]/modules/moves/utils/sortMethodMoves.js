import { getMoveTableHeads } from './moveTableHeadUtils';

function sortArray(arr, compareFn, isAsc) {
  const sortedArray = [...arr].sort(compareFn);
  return isAsc ? sortedArray : sortedArray.reverse();
}

function sortMovesByName(moves, language, isAsc) {
  return sortArray(moves, (a, b) => (
    a.move.name[language].localeCompare(b.move.name[language])
  ), isAsc);
}

function sortMovesByTextKey(moves, key, isAsc) {
  const normalizedKey = key === 'damageClass' ? 'damage_class' : key;
  return sortArray(moves, (a, b) => (
    a.move[normalizedKey].localeCompare(b.move[normalizedKey])
  ), isAsc);
}

function sortMovesByNumericKey(moves, key, isAsc) {
  return sortArray(moves, (a, b) => (
    a.move[key] - b.move[key]
  ), isAsc);
}

function sortMovesByLevel(moves, isAsc) {
  return sortArray(moves, (a, b) => a.level - b.level, isAsc);
}

function sortMovesByPreIds(moves, isAsc) {
  return sortArray(moves, (a, b) => {
    const aPreIds = a.preIds;
    const bPreIds = b.preIds;

    if (aPreIds.length !== bPreIds.length) {
      return aPreIds.length - bPreIds.length;
    }

    const aSumIds = aPreIds.reduce((acc, cur) => acc + Number(cur), 0);
    const bSumIds = bPreIds.reduce((acc, cur) => acc + Number(cur), 0);

    return aSumIds - bSumIds;
  }, isAsc);
}

function sortMovesByMachineNumber(moves, isAsc) {
  return sortArray(moves, (a, b) => a.machine.number - b.machine.number, isAsc);
}

export default function sortMovesByKey({
  moves,
  selectedKey,
  language,
  isAsc,
}) {
  const {
    level,
    type,
    damageClass,
    name,
    tm,
    tr,
    hm,
    pre,
  } = getMoveTableHeads();

  switch (selectedKey) {
    case level:
      return sortMovesByLevel(moves, isAsc);
    case type:
    case damageClass:
      return sortMovesByTextKey(moves, selectedKey, isAsc);
    case name:
      return sortMovesByName(moves, language, isAsc);
    case tm:
    case tr:
    case hm:
      return sortMovesByMachineNumber(moves, isAsc);
    case pre:
      return sortMovesByPreIds(moves, isAsc);
    default:
      return sortMovesByNumericKey(moves, selectedKey, isAsc);
  }
}
