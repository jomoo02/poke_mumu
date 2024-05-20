import PokeModel from '../../app/models/Poke.mjs';

async function fetchPoke(id) {
  try {
    const query = { id };
    const projection = {
      name: 1,
    };
    const poke = await PokeModel.findOne(query, projection).lean();
    console.log(id, poke.name);
    return poke;
  } catch (error) {
    console.error(`fetchPoke error: ${id} ${error.message}`);
    return error;
  }
}

async function searchRecursiveChain(chain) {
  try {
    return Promise.all(chain.map(async (c) => {
      const { id } = c;
      const castNumberId = Number(id);

      if (!Number.isNaN(castNumberId) && castNumberId !== 10257) {
        const { name } = await fetchPoke(castNumberId);
        if (c.to.length > 0) {
          return {
            ...c,
            name,
            to: await searchRecursiveChain(c.to),
          };
        }
        return {
          ...c,
          name,
        };
      }
      const name = { ko: c.name, en: c.name };
      if (c.to.length > 0) {
        return {
          ...c,
          name,
          to: await searchRecursiveChain(c.to),
        };
      }
      return {
        ...c,
        name,
      };
    }));
  } catch (error) {
    console.error(`$searchRecursiveChain error: ${error.message}`);
    return error;
  }
}

function checkExistTo(chain) {
  let answer = false;

  chain.chain.forEach(({ to }) => {
    if (to.length !== 0) {
      answer = true;
    }
  });
  return answer;
}

export default async function updateChainV2(chains) {
  try {
    const filterdChains = chains
      .sort((a, b) => a.chainIndex - b.chainIndex)
      .filter(checkExistTo);

    return Promise.all(filterdChains.map(async ({ chain, ids }, index) => ({
      chain: await searchRecursiveChain(chain),
      ids,
      index: index + 1,
    })));
  } catch (error) {
    console.error(`updateChainV2 error: ${error.message}`);
    return error;
  }
}
