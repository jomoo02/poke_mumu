'use server';

import { filterName, checkMegaPokeName } from '../../scripts/pokeapi/name.mjs';
import filterAbilities from './detail/abilities';
import filterStats from './detail/stats';
import filterMoves from './detail/moves';

const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

async function getPokeSpecies(url) {
  const data = await (await fetch(url)).json();
  return data;
}

export default async function fetchPokeDetail(id) {
  const data = await (await fetch(`${POKE_URL}/${id}`)).json();

  const {
    species,
    sprites,
    types: typesObj,
    abilities: abilitiesObj,
    stats: statsObj,
    moves: movesObj,
  } = data;

  const { names, id: no } = await getPokeSpecies(species.url);
  const filteredName = filterName(names);
  const sprity = sprites.other['official-artwork'].front_default;
  const types = typesObj.map(({ type }) => type.name);
  const abilities = await filterAbilities(abilitiesObj);
  const stats = filterStats(statsObj);
  const moves = filterMoves(movesObj);

  return {
    no,
    sprity,
    name: filteredName,
    types,
    abilities,
    stats,
    moves,
  };
}
