import dotenv from 'dotenv';
import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import DetailModel from '../app/models/Detail.mjs';
import ChainV2Model from '../app/models/ChainV2.mjs';
import fetchTotalMoves from './detail/moves.mjs';
import { connectMongoose, disconnectMongoose } from '../app/api/db/connectMongoose.mjs';
import PokeModel from '../app/models/Poke.mjs';
import PokeMoveModel from '../app/models/PokeMove.mjs';

dotenv.config({ path: '.env.local' });

const instance = axios.create();
const axiosCache = setupCache(instance);

async function fetchChain(index) {
  try {
    const projection = {
      _id: 0,
      chain: 1,
    };
    const result = await ChainV2Model.findOne({ index }, projection).lean();

    return result.chain;
  } catch (error) {
    console.error(`error fetchChain: ${error.message}`);
    return error;
  }
}

async function fetchChainIndex(id) {
  try {
    const query = { id };
    const projection = {
      _id: 0,
      chainIndex: 1,
    };

    const result = await DetailModel.findOne(query, projection).lean();

    return result.chainIndex || 0;
  } catch (error) {
    console.error(`error fetchChainIndex: ${error.message}`);
    return error;
  }
}

async function fetchPokeMoves(id) {
  const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

  try {
    const { data } = await axiosCache(`${POKE_URL}/${id}`);
    const { moves: movesObj } = data;

    const chainIndex = await fetchChainIndex(id);
    const chain = chainIndex === 0 ? [] : await fetchChain(chainIndex);

    const moves = await fetchTotalMoves(movesObj, id, chain);

    return moves;
  } catch (error) {
    console.error(`error fetchPokeData: ${error.message}`);
    return error;
  }
}

async function updateDetailModelMoves(id, moves) {
  try {
    const query = { id };
    const update = { moves };
    const option = { new: true };

    const updateDetailModel = await DetailModel.findOneAndUpdate(
      query,
      update,
      option,
    );

    console.log(`update id: ${id} detail moves`);
    return updateDetailModel;
  } catch (error) {
    console.error(`updateDetailModelMoves ${id}: ${error.message}`);
    return error;
  }
}

async function fetchAllPokeIdAndPokeKey() {
  try {
    const query = {};
    const projection = {
      id: 1,
      pokeKey: 1,
      _id: 0,
    };

    const res = await PokeModel.find(query, projection).sort({ id: 1 }).lean();
    return res;
  } catch (error) {
    console.error('error fetchAllPokeIdAndPokeKey');
    return error;
  }
}

async function createPokeMove(pokeKey, moves) {
  try {
    const foundPokeMoves = await PokeMoveModel.findOne({ pokeKey }).lean();

    if (foundPokeMoves) {
      console.log(`존재하는 pokeKey${pokeKey}의 moves`);
    } else {
      const pokeMove = new PokeMoveModel({
        pokeKey,
        moves,
      });

      await PokeMoveModel.create(pokeMove);
      console.log('success create pokeMove');
    }
  } catch (error) {
    console.error(`error createPokeMove ${error.message}`);
  }
}

async function main() {
  try {
    await connectMongoose();

    const allId = await fetchAllPokeIdAndPokeKey();

    // const targets = allId.filter((info) => [3, 235, 612].includes(info.id));

    // await Promise.all((targets.map(async ({ id, pokeKey }) => {
    //   const moves = await fetchPokeMoves(id);
    //   await createPokeMove(pokeKey, moves);
    // })));

    // eslint-disable-next-line no-restricted-syntax
    for (const { id, pokeKey } of allId) {
      const moves = await fetchPokeMoves(id);
      await createPokeMove(pokeKey, moves);
    }

    await disconnectMongoose();
  } catch (error) {
    console.error(`error: main ${error.message}`);
  }
}

main();
