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

function addPreEggMoves(eggMoves, preEggMoves, preId) {
  return preEggMoves.reduce((acc, cur) => {
    const foundMoveIndex = acc.findIndex(({ name }) => name?.ko === cur.name?.ko);

    if (foundMoveIndex === -1) {
      acc.push({
        ...cur,
        preIds: [preId],
      });
    } else {
      acc[foundMoveIndex].preIds.push(preId);
    }

    return acc;
  }, [...eggMoves]);
}

function compareGenMoves(genMoves, preGenMoves, preId) {
  return genMoves.map((genMove) => {
    const { version, versionMoves } = genMove;
    const eggMove = versionMoves.egg;

    const foundPreVersion = preGenMoves.find((pre) => pre.version === version);
    const addedEggMoves = foundPreVersion
      ? addPreEggMoves(eggMove, foundPreVersion.versionMoves.egg, preId)
      : eggMove;

    return {
      version,
      versionMoves: {
        ...versionMoves,
        egg: addedEggMoves,
      },
    };
  });
}

// function compareOnePreMoves(moves, preGenMoves, preId) {
//   return moves.map(({ gen, genMoves }) => {
//     const foundPreGen = preMoves.find((preMove) => preMove.gen === gen);
//     if (!foundPreGen) {
//       return { gen, genMoves };
//     }

//     return {
//       gen,
//       genMoves: compareGenMoves(genMoves, foundPreGen.genMoves, preId),
//     };
//   });
// }

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
