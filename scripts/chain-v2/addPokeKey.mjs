import dotenv from 'dotenv';
import PokeModel from '../../app/models/Poke.mjs';
import ChainV2Model from '../../app/models/ChainV2.mjs';
import { connectMongoose, disconnectMongoose } from '../../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

async function fetchPokeKey(id) {
  try {
    const query = { id };
    const projection = { pokeKey: 1 };
    const pokeKey = await PokeModel.findOne(query, projection).lean();
    console.log(`success ${id} key`);
    return pokeKey;
  } catch (error) {
    console.error(`error fetchPokeKey: ${error.message}`);
    return error;
  }
}

async function addPokeKey(chain) {
  try {
    const addedPokeKeyChain = await Promise.all(chain.map(async (c) => {
      const { pokeKey } = await fetchPokeKey(c.id);
      const result = { pokeKey, ...c };

      if (c.to && c.to.length > 0) {
        result.to = await addPokeKey(c.to);
      }

      return result;
    }));

    return addedPokeKeyChain;
  } catch (error) {
    console.error(`addPokeKey error: ${error.message}`);
    return error;
  }
}

async function updatePokeKeyChain({ index, chain }) {
  try {
    const addedChain = await addPokeKey(chain);
    const query = { index };
    const update = { chain: addedChain };
    const option = { new: true };

    const updatedChain = await ChainV2Model.findOneAndUpdate(
      query,
      update,
      option,
    );

    console.log(`index: ${index} chain succes update`);
    return updatedChain;
  } catch (error) {
    console.error(`error updatePokeKeyChain ${error.message}`);
    return error;
  }
}

async function fetchAllChain() {
  try {
    const query = {};
    const projection = {
      chain: 1,
      index: 1,
    };
    const allChains = await ChainV2Model.find(query, projection).lean();

    return allChains;
  } catch (error) {
    console.error(`error fetchAllCahin: ${error.message}`);
    return error;
  }
}

async function main() {
  try {
    await connectMongoose();

    const allChains = await fetchAllChain();

    await Promise.all(allChains.map(updatePokeKeyChain));

    await disconnectMongoose();
  } catch (error) {
    console.error(`main error: ${error.message}`);
  }
}

main();
