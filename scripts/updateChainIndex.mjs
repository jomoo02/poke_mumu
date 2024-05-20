import dotenv from 'dotenv';
import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import DetailModel from '../app/models/Detail.mjs';
import ChainV2Model from '../app/models/ChainV2.mjs';
import { connectMongoose, disconnectMongoose } from '../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

const instance = axios.create();
const axiosCache = setupCache(instance);

async function fetchAllChain() {
  try {
    const query = {};
    const projection = {
      ids: 1,
      index: 1,
    };
    const allChains = await ChainV2Model.find(query, projection).lean();

    return allChains;
  } catch (error) {
    console.error(`error fetchAllCahin: ${error.message}`);
    return error;
  }
}

async function fetchSpecisId(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const { data } = await axiosCache(url);
    const { name, species } = data;
    if (name !== species.name) {
      return Number(species.url.split('/').at(-2));
    }
    return id;
  } catch (error) {
    console.error(`fetchSpecisId error ${id}: ${error.message}`);
    return id;
  }
}

async function fetchAllDetailId() {
  try {
    const query = {};
    const projection = {
      id: 1,
    };
    const allDetail = await DetailModel.find(query, projection).lean();
    return allDetail;
  } catch (error) {
    console.error(`fetchAllDetailId error: ${error.message}`);
    return error;
  }
}

async function updateChainIndex(id, allChain) {
  try {
    const speciesId = await fetchSpecisId(id);
    const updatingIndex = allChain.find(({ ids }) => (
      ids.includes(String(speciesId))))?.index || 0;

    const query = { id: Number(id) };
    const update = { chainIndex: updatingIndex };
    const option = { new: true, rawResult: true };

    const updateDetailModel = await DetailModel.findOneAndUpdate(
      query,
      update,
      option,
    );

    console.log(`${id} success update`);

    return updateDetailModel;
  } catch (error) {
    console.error(`updateChainIndex ${id} error: ${error.message}`);
    return error;
  }
}

async function main() {
  try {
    await connectMongoose();

    const allDetailIds = await fetchAllDetailId();
    const allChains = await fetchAllChain();

    // eslint-disable-next-line no-restricted-syntax
    // for (const { id } of allDetailIds) {
    //   // eslint-disable-next-line no-await-in-loop
    //   await updateChainIndex(id, allChains);
    // }

    await Promise.all(allDetailIds.map(({ id }) => updateChainIndex(id, allChains)));

    await disconnectMongoose();
  } catch (error) {
    console.error(`main error: ${error.message}`);
  }
}

main();
