import fetchMoves from './moves/moves.mjs';
import {
  tracePreviousEvolutionIds,
  addPreviousEvolutionMoves,
} from './moves/chain.mjs';
import updateMoves from './moves/update.mjs';

async function fetchPokeMoves(id) {
  const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

  try {
    const data = await (await fetch(`${POKE_URL}/${id}`)).json();
    return fetchMoves(data.moves);
  } catch (error) {
    console.error(`$moves.mjs fetchPokeMoves: ${error}`);
    return error.message;
  }
}

async function fetchPreviousEvolutionMoves(preEvolutionIds) {
  try {
    return await Promise.all(
      preEvolutionIds.map(async (id) => ({
        preId: id,
        preMoves: await fetchPokeMoves(id),
      })),
    );
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export default async function fetchTotalMoves(moveData, id, chain) {
  try {
    const moves = await fetchMoves(moveData);
    const preEvolutionIds = tracePreviousEvolutionIds(id, chain);

    if (preEvolutionIds.length === 0) {
      return moves;
    }

    const preEvolutionMovesData = await fetchPreviousEvolutionMoves(preEvolutionIds);
    const addedPreMoves = addPreviousEvolutionMoves(moves, preEvolutionMovesData);
    return updateMoves(addedPreMoves);
  } catch (error) {
    console.error(error);
    return error.message;
  }
}
