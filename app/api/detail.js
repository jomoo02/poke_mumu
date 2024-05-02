'use server';

import filterAbilities from './detail/abilities';
import filterStats from './detail/stats';
import filterMoves from './detail/moves';
import pickForms from './detail/form';

const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

export default async function fetchPokeDetail(id, chain) {
  const data = await (await fetch(`${POKE_URL}/${id}`)).json();

  const {
    species,
    forms: formsArr,
    abilities: abilitiesObj,
    stats: statsObj,
    moves: movesObj,
  } = data;

  const abilities = await filterAbilities(abilitiesObj);
  const stats = filterStats(statsObj);
  const moves = await filterMoves(movesObj);
  const speciesData = await (await fetch(species.url)).json();
  const { varieties, id: speciesId } = speciesData;
  const forms = await pickForms(varieties, formsArr);

  return {
    abilities,
    stats,
    moves,
    forms,
    speciesId,
  };
}
