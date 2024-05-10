import dotenv from 'dotenv';
import axios from 'axios';
import fetchTotalMoves from './detail/moves.mjs';
import fetchForms from './detail/form.mjs';
import extractStats from './detail/stats.mjs';
import fetchAbilities from './detail/abilities.mjs';
import ChainModel from '../app/models/Chain.mjs';
import DetailModel from '../app/models/Detail.mjs';
import PokeModel from '../app/models/Poke.mjs';
import { connectMongoose, disconnectMongoose } from '../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

function filterName(names) {
  const findLanguageName = (lan) => names.find(({ language }) => language.name === lan)?.name;
  const en = findLanguageName('en');
  const ko = findLanguageName('ko') || en;
  return {
    en, ko,
  };
}

async function fetchAllChainIds() {
  try {
    const projection = {
      _id: 0,
      chainIndex: 1,
      ids: 1,
    };

    const result = await ChainModel.find({}, projection).lean();

    return result;
  } catch (error) {
    console.log(error);

    return [];
  }
}

async function fetchChain(chainIndex) {
  try {
    const query = { chainIndex };
    const projection = {
      _id: 0,
      chainIndex: 1,
      chain: 1,
    };

    const result = await ChainModel
      .findOne(query, projection)
      .lean();

    return result;
  } catch (error) {
    console.log(error);

    return '';
  }
}

async function fetchAllPokeIds() {
  try {
    const projection = {
      _id: 0,
      id: 1,
      order: 1,
    };

    const result = await PokeModel
      .find({}, projection)
      .sort({ order: 1 })
      .lean();

    return result;
  } catch (error) {
    console.error(`fetchAllPokeIds error ${error}`);
    return error.message;
  }
}

function findTargetIdChainIndex(id, speciesId, allChainIds) {
  const findChainIndex = (targetId) => (
    allChainIds.find(({ ids }) => ids.includes(String(targetId)))?.chainIndex
  );

  const foundChainIndex = findChainIndex(id);

  if (foundChainIndex) {
    return foundChainIndex;
  }

  return findChainIndex(speciesId);
}

async function fetchDetail(id) {
  const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

  try {
    const { data } = await axios(`${POKE_URL}/${id}`);
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

    const allChainIds = await fetchAllChainIds();
    const chainIndex = findTargetIdChainIndex(id, speciesId, allChainIds);
    const chain = await fetchChain(chainIndex);

    const moves = await fetchTotalMoves(movesObj, id, chain.chain);

    const detailModel = new DetailModel({
      stats,
      abilities,
      forms,
      chainIndex,
      moves,
      id: Number(id),
      speciesName: filterName(names),
      speciesId: Number(speciesId),
    });

    return detailModel;
  } catch (error) {
    console.error(`fetchDetail Error: ${error}`);
    return error.message;
  }
}

async function findDetail(id) {
  try {
    const query = { id };
    const result = await DetailModel.findOne(query).lean();
    return result;
  } catch (error) {
    console.error(`findDetail Error ${error}`);
    return error.message;
  }
}

async function createDetail(id) {
  try {
    const isExist = await findDetail(id);

    if (isExist) {
      console.log(`${id}이미 존재하는 detail model`);
    } else {
      const detailModel = await fetchDetail(id);
      await DetailModel.create(detailModel);
      console.log(`${id} detail save!`);
    }
  } catch (error) {
    console.error(`createDetail error ${error}`);
  }
}

async function main() {
  await connectMongoose();
  const allPokeIds = (await fetchAllPokeIds()).map(({ id }) => id).sort((a, b) => a - b);

  for (const id of allPokeIds) {
    await createDetail(id);
  }

  await disconnectMongoose();
}

main();
