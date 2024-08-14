export function getTargetMoveCategories() {
  const categories = [
    'level-up',
    'machine',
    'tutor',
    'egg',
    'pre',
    'reminder',
  ];

  return categories;
}

export function checkTargetMovesEmpty(targetMoves) {
  const filterdMoves = Object
    .values(targetMoves)
    .filter((moves) => moves.length > 0);

  return filterdMoves.length === 0;
}

function setMoveKeyLevelupMove(levelUpMoves) {
  const levelUpCategoryKey = 'levelMoves';

  if (!levelUpMoves || levelUpMoves.length === 0) {
    return ({ [levelUpCategoryKey]: [] });
  }

  const moves = levelUpMoves.map((move) => ({
    ...move,
    key: `${move.level}-${move.move.name.en}`,
  }));

  return ({ [levelUpCategoryKey]: moves });
}

export function setMoveKeyTagetMoves(targetMoves) {
  const [
    levelUp,
    ...rest
  ] = getTargetMoveCategories();

  const levelUpCategoryMoves = setMoveKeyLevelupMove(targetMoves[levelUp]);

  const restCategoriesMoves = rest.map((category) => {
    const categoryKey = `${category}Moves`;
    const categoryMoves = targetMoves[category];

    if (!categoryMoves || categoryMoves.length === 0) {
      return ({ [categoryKey]: [] });
    }

    return ({
      [categoryKey]: categoryMoves.map((move) => ({
        ...move,
        key: move.move.name.en,
      })),
    });
  });
  console.log(levelUpCategoryMoves, restCategoriesMoves)

  return restCategoriesMoves.reduce((acc, cur) => ({
    ...acc, ...cur,
  }), levelUpCategoryMoves);
}

export function groupMachineMovesByType(machineMoves) {
  const types = ['tm', 'tr', 'hm'];

  const targetMoves = [...machineMoves];

  const filterMoveBytype = (type) => (
    targetMoves
      .filter(({ machine }) => machine.type === type)
      .sort((a, b) => a.machine.number - b.machine.number)
  );

  return (
    types
      .map((type) => (
        { type, moves: filterMoveBytype(type) }
      ))
      .filter(({ moves }) => moves.length > 0)
  );
}
