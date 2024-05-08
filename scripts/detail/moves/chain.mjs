function findMove(moves, name) {
  return moves.find(({ move }) => move?.name?.ko === name?.ko);
}

function mapEvolutionChain(chain, map = new Map()) {
  chain.forEach((item) => {
    const { id, to } = item;
    map.set(id, item);

    if (to.length > 0) {
      mapEvolutionChain(to, map);
    }
  });

  return map;
}

export function tracePreviousEvolutionIds(id, chain) {
  const preEvolutionIds = [];
  const evolutionMap = mapEvolutionChain(chain);
  let currentId = String(id);

  while (currentId && evolutionMap.has(currentId)) {
    const { from } = evolutionMap.get(currentId);
    if (!from) {
      break;
    }

    preEvolutionIds.push(from);
    currentId = from;
  }

  return preEvolutionIds.reverse();
}

function addEggMoves(eggMoves, newMoves) {
  return newMoves.reduce((acc, cur) => {
    const foundMove = findMove(acc, cur.move.name);
    if (!foundMove) {
      acc.push(cur);
    }
    return acc;
  }, [...eggMoves]);
}

function addPreEvolutionMoves(moves, preEvolutionMoves, preId) {
  const { pre, ...rest } = moves;
  const existingMoves = Object.values(rest).flat();
  const newMoves = Object.values(preEvolutionMoves).flat();

  return newMoves.reduce((acc, cur) => {
    const isExistMove = findMove(existingMoves, cur.move.name);

    if (!isExistMove) {
      const foundPreMove = findMove(acc, cur.move.name);
      if (!foundPreMove) {
        acc.push({ ...cur, preIds: [preId] });
      } else {
        foundPreMove.preIds.push(preId);
      }
    }

    return acc;
  }, [...pre]);
}

function compareGenMoves(genMoves, preGenMoves, preId) {
  return genMoves.map(({ version, versionMoves }) => {
    const { egg, ...restMoves } = versionMoves;

    const foundVersion = preGenMoves.find((preGenMove) => preGenMove.version === version);
    if (!foundVersion) {
      return { version, versionMoves };
    }
    const { egg: preEvoultionEgg, ...restPreEvolutionMoves } = foundVersion.versionMoves;
    const updatedEggMoves = addEggMoves(egg, preEvoultionEgg);
    const updatedPreMoves = addPreEvolutionMoves(restMoves, restPreEvolutionMoves, preId);

    return {
      version,
      versionMoves: {
        ...versionMoves,
        egg: updatedEggMoves,
        pre: updatedPreMoves,
      },
    };
  });
}

export function addPreviousEvolutionMoves(moves, preMovesDatas) {
  return preMovesDatas.reduce((currentMoves, { preId, preMoves }) => (
    currentMoves.map(({ gen, genMoves }) => {
      const preGenMoves = preMoves.find((preMove) => preMove.gen === gen);
      return {
        gen,
        genMoves: preGenMoves
          ? compareGenMoves(genMoves, preGenMoves.genMoves, preId)
          : genMoves,
      };
    })), moves);
}
