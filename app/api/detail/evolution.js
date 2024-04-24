'use server';

import { fetchPokes } from '../data.js';
import editEvolutionChains from './evolution-edit.js';

function pickPokeIdAndNo(pokes) {
  const res = pokes.map(({ id, no }) => ({ id, no }));
  return res;
}

async function pickPokeEvolutionChainLink(id) {
  const POKE_URL = 'https://pokeapi.co/api/v2/pokemon/';

  try {
    const data = await (await fetch(`${POKE_URL}${id}`)).json();
    const { species } = data;
    const speciesData = await (await fetch(species.url)).json();

    return speciesData.evolution_chain.url;
  } catch (error) {
    console.log(error);
    return '';
  }
}

async function setEvolutionChainLink(pokeIds) {
  const linkSet = new Set();
  const linkes = await Promise.all(pokeIds.map(({ id }) => pickPokeEvolutionChainLink(id)));

  linkes.forEach((link) => linkSet.add(link));

  return [...linkSet];
}

function pickEvolutionDetailInfo(details) {
  const pickConditions = (detail) => {
    const keys = Object.keys(detail);
    return keys.reduce((acc, cur) => {
      if (cur === 'trigger') {
        acc[cur] = detail[cur].name;
      } else if (detail[cur]) {
        acc.condition = [...acc.condition, [cur, detail[cur]]];
      }

      return acc;
    }, { trigger: '', condition: [] });
  };
  return details.map((detail) => pickConditions(detail));
}

function serachRecursiveChain(chain) {
  const current = {
    name: '', to: [], detail: [], id: '',
  };
  current.name = chain.species.name;
  current.id = chain.species.url.split('/').at(-2);

  if (chain.evolution_details.length > 0) {
    current.detail = pickEvolutionDetailInfo(chain.evolution_details);
  }

  if (chain.evolves_to.length > 0) {
    current.to = chain.evolves_to.map((evolveTo) => serachRecursiveChain(evolveTo));
  }

  return current;
}

async function pickEvolutionData(link) {
  try {
    const data = await (await fetch(link)).json();
    const { chain } = data;

    const chainInfo = [serachRecursiveChain(chain)];
    return chainInfo;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function fetchEvolutionTree() {
  try {
    const fokePromise = [];
    for (let i = 0; i < 6; i += 1) {
      fokePromise.push(fetchPokes(i));
    }
    const pokes = (await Promise.all(fokePromise)).flat();

    const pickedPokes = await setEvolutionChainLink(pickPokeIdAndNo(pokes));
    const chainDatas = (await Promise.all(pickedPokes.map((poke) => pickEvolutionData(poke))))
      .map((data, index) => ({ chainIndex: index + 1, chain: data }));

    console.log(chainDatas[6]);
    return editEvolutionChains(chainDatas);
  } catch (error) {
    console.log(error);
    return [];
  }
}
