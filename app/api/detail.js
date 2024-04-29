'use server';

import filterAbilities from './detail/abilities';
import filterStats from './detail/stats';
import filterMoves from './detail/moves';

const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

export default async function fetchPokeDetail(id, chain) {
  const data = await (await fetch(`${POKE_URL}/${id}`)).json();

  const {
    abilities: abilitiesObj,
    stats: statsObj,
    moves: movesObj,
  } = data;

  const abilities = await filterAbilities(abilitiesObj);
  const stats = filterStats(statsObj);
  const moves = await filterMoves(movesObj);

  return {
    abilities,
    stats,
    moves,
  };
}
