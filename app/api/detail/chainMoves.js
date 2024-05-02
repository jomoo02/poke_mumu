import filterMoves from './moves';

const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokeMoves(id) {
  const data = await (await fetch(`${POKE_URL}/${id}`)).json();
  const moves = await filterMoves(data.moves);
  return moves;
}

function mapEvolutionChain(chain, map = new Map()) {
  chain.forEach((item) => {
    map.set(item.id, item);
    if (item.to && item.to.length > 0) {
      mapEvolutionChain(item.to, map);
    }
  });
  return map;
}

function traceBackEvolution(id, chain) {
  const beforeEvolution = [];
  const evolutionMap = mapEvolutionChain(chain);
  let currentId = id;

  while (currentId && evolutionMap.has(currentId)) {
    const currentElement = evolutionMap.get(currentId);
    if (!currentElement.from) break;

    beforeEvolution.push(currentElement.from);
    currentId = currentElement.from;
  }

  return beforeEvolution.reverse();
}

function getAllMethodMoves(moves) {
  const method = Object.keys(moves);
  return method.reduce((acc, cur) => {
    const currentMethodMoves = moves[cur];
    return [...acc, ...currentMethodMoves];
  }, []);
}

function contrastMoves(moves, backMoves) {
  const res = [];
  const moveSet = new Set();
  moves.forEach(({ move }) => moveSet.add(move.name.en));

  backMoves.forEach((move) => {
    const targetMove = move.move.name.en;
    if (!moveSet.has(targetMove)) {
      res.push(move);
    }
  });

  return res;
}

function findBackGenMoves(backEvolutionMoves, targetGen) {
  return backEvolutionMoves.map(({ backId, backMoves }) => {
    const backGenMoves = backMoves.find(({ gen }) => gen === targetGen)?.genMoves;
    return ({
      backId,
      backGenMoves,
    });
  });
}

function removeDuplicate(comparedBacks) {
  const findMoveIndex = (moves, target) => moves.findIndex(({ move }) => move.name.en === target);
  const moveSet = new Set();
  return comparedBacks.reduce((acc, { compared, backId }) => {
    compared.forEach(({ move }) => {
      const moveName = move.name.en;

      if (moveSet.has(moveName)) {
        const targetMovesIndex = findMoveIndex(acc, moveName);
        const {
          move: targetMove,
          ids,
        } = acc[targetMovesIndex];
        acc[targetMovesIndex] = { ids: [...new Set([...ids, backId])], move: targetMove };
      } else {
        moveSet.add(moveName);
        acc.push({ move, ids: [backId] });
      }
    });
    return acc;
  }, []);
}

function compareBackEggMove(versionEggMoves, backVersionEggMoves) {
  if (backVersionEggMoves.length > 0) {
    return backVersionEggMoves;
  }
  return versionEggMoves;
}

function addBackEggMove(moves, backEvolutionsMoves) {
  return moves.map(({ gen, genMoves }) => {
    const backTargetGenMoves = findBackGenMoves(backEvolutionsMoves, gen);
    const afterGenMoves = genMoves.map(({ version, versionMoves }, versionIndex) => {
      const targetVersion = backTargetGenMoves[0].backGenMoves;
      if (!targetVersion) {
        return {
          version,
          versionMoves,
        };
      }
      const targetVersionBackMoves = targetVersion[versionIndex]?.versionMoves;

      const addedBackEggMove = compareBackEggMove(versionMoves.egg, targetVersionBackMoves.egg);
      return {
        version,
        versionMoves: {
          ...versionMoves,
          egg: addedBackEggMove,
        },
      };
    });
    return {
      gen,
      genMoves: afterGenMoves,
    };
  });
}

export default async function checkBackEvolutionMoves(id, chain, moves) {
  const backEvolution = traceBackEvolution(id, chain);

  if (backEvolution.length > 0) {
    const backEvolutionsMoves = await Promise.all(
      backEvolution.map(async (backId) => {
        const backMoves = await fetchPokeMoves(backId);
        return ({
          backId,
          backMoves,
        });
      }),
    );

    return addBackEggMove(moves, backEvolutionsMoves).map(({ gen, genMoves }) => {
      const backTargetGenMoves = findBackGenMoves(backEvolutionsMoves, gen);
      const afterGenMoves = genMoves.map(({ version, versionMoves }, versionIndex) => {
        const comparedBacks = backTargetGenMoves.map(({ backId, backGenMoves }) => {
          if (!backGenMoves) {
            return {
              backId,
              compared: [],
            };
          }
          const targetVersionBackMoves = backGenMoves[versionIndex].versionMoves;
          const compared = contrastMoves(
            getAllMethodMoves(versionMoves),
            getAllMethodMoves(targetVersionBackMoves),
          );
          return {
            compared,
            backId,
          };
        });
        const deduplicatdBakcs = removeDuplicate(comparedBacks);
        return {
          version,
          versionMoves: {
            ...versionMoves,
            back: deduplicatdBakcs,
          },
        };
      });
      return {
        gen,
        genMoves: afterGenMoves,
      };
    });
  }

  return moves;
}
