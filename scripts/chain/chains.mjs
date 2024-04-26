import editEvolutionChains from './chain-edit.mjs';
import PokeModel from '../../app/models/Poke.mjs';

export async function fetchPokes() {
  try {
    const result = await PokeModel
      .find({})
      .sort({ no: 1, id: 1 })
      .lean();

    return result;
  } catch (error) {
    console.error(error);

    return [];
  }
}

function pickPokeIdAndNo(pokes) {
  const res = pokes.map(({ id, no }) => ({ id, no }));
  return res;
}

async function pickPokeEvolutionChainLink(id) {
  const POKE_URL = 'https://pokeapi.co/api/v2/pokemon/';

  try {
    const data = await (await fetch(`${POKE_URL}${id}`, { cache: 'no-store' })).json();
    const { species } = data;
    const speciesData = await (await fetch(species.url, { cache: 'no-store' })).json();

    return speciesData.evolution_chain.url;
  } catch (error) {
    console.log(error);
    return '';
  }
}

async function setEvolutionChainLink(pokeIds) {
  const linkSet = new Set();

  for (let i = 0; i < pokeIds.length; i += 100) {
    const batch = pokeIds.slice(i, i + 100);
    // eslint-disable-next-line no-await-in-loop
    const links = await Promise.all(batch.map(({ id }) => pickPokeEvolutionChainLink(id)));
    links.forEach((link) => linkSet.add(link));
  }

  return [...linkSet];
}

function pickEvolutionDetailInfo(details) {
  const pickConditions = (detail) => {
    const keys = Object.keys(detail);
    return keys.reduce((acc, cur) => {
      if (cur === 'trigger') {
        acc[cur] = detail[cur].name;
      } else if (detail[cur]) {
        const value = detail[cur]?.name ? detail[cur].name : detail[cur];
        acc.condition = [...acc.condition, [cur, value]];
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

function pickIncludePokeIds(chain, idSet = new Set()) {
  chain.forEach(({ to, id }) => {
    idSet.add(id);
    if (to.length > 0) {
      pickIncludePokeIds(to, idSet);
    }
  });

  return idSet;
}

async function pickEvolutionData(link) {
  try {
    const data = await (await fetch(link, { cache: 'no-store' })).json();

    const { chain } = data;

    const chainInfo = [serachRecursiveChain(chain)];

    return chainInfo;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function fetchEvolutionChain() {
  try {
    const pokes = await fetchPokes();

    const pickedPokes = await setEvolutionChainLink(pickPokeIdAndNo(pokes));

    const chainDatas = (await Promise.all(pickedPokes.map((poke) => pickEvolutionData(poke))))
      .map((data, index) => ({ chainIndex: index + 1, chain: data }));

    const editedEvolutionChains = editEvolutionChains(chainDatas);

    const addedIdsFieldChains = editedEvolutionChains.map((chain) => {
      const ids = pickIncludePokeIds(chain.chain);
      return {
        ...chain,
        ids: [...ids],
      };
    });

    return addedIdsFieldChains;
  } catch (error) {
    console.log(error);
    return [];
  }
}
