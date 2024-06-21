import dotenv from 'dotenv';
import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import DetailModel from '../app/models/Detail.mjs';
import ChainV2Model from '../app/models/ChainV2.mjs';
import fetchTotalMoves from './detail/moves.mjs';
import { connectMongoose, disconnectMongoose } from '../app/api/db/connectMongoose.mjs';

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

    return result.chainIndex;
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
    const chain = await fetchChain(chainIndex);

    console.log(chainIndex);
    console.log(chain);
    const moves = await fetchTotalMoves(movesObj, id, chain);

    return moves;
    // return 1;
  } catch (error) {
    console.error(`error fetchPokeData: ${error.message}`);
    return error;
  }
}

async function main() {
  const test = '612';
  try {
    await connectMongoose();

    const moves = await fetchPokeMoves(test);
    console.log(moves);

    await disconnectMongoose();
  } catch (error) {
    console.error(`error: main ${error.message}`);
  }
}

main();
