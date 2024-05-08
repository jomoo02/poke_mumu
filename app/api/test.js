'use server';

import fetchTotalMoves from '../../scripts/detail/moves.mjs';
import fetchForms from '../../scripts/detail/form.mjs';
import extractStats from '../../scripts/detail/stats.mjs';
import fetchAbilities from '../../scripts/detail/abilities.mjs';
import { fetchAllChainIds, fetchChain } from './chain';

function filterName(names) {
  const findLanguageName = (lan) => names.find(({ language }) => language.name === lan)?.name;
  const en = findLanguageName('en');
  const ko = findLanguageName('ko') || en;
  return {
    en, ko,
  };
}

async function fetchChainIndex(id, speciesId) {
  try {
    const allChainIds = await fetchAllChainIds();
    const index = allChainIds.find((chainId) => chainId.ids.includes(String(id)))?.chainIndex;

    if (index) {
      return index;
    }
    return allChainIds.find((chainId) => chainId.includes(String(speciesId)))?.chainIndex;
  } catch (error) {
    return error.message;
  }
}

export default async function fetchPokeDetailTest(id) {
  const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

  try {
    const data = await (await fetch(`${POKE_URL}/${id}`)).json();

    const {
      species,
      forms: formsArr,
      abilities: abilitiesObj,
      stats: statsObj,
      moves: movesObj,
    } = data;

    const stats = extractStats(statsObj);
    const abilities = await fetchAbilities(abilitiesObj);
    const speciesData = await (await fetch(species.url)).json();
    const { varieties, id: speciesId, names } = speciesData;

    const forms = await fetchForms(varieties, formsArr);

    const chainIndex = await fetchChainIndex(id, speciesId);
    const chain = await fetchChain(chainIndex);
    const moves = await fetchTotalMoves(movesObj, id, chain.chain);
    return {
      abilities,
      stats,
      moves,
      forms,
      chain,
      speciesName: filterName(names),
    };
  } catch (error) {
    return error.message;
  }
}
