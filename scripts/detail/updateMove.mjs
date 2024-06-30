import dotenv from 'dotenv';
import DetailModel from '../../app/models/Detail.mjs';
import PokeMoveModel from '../../app/models/PokeMove.mjs';
import PokeModel from '../../app/models/Poke.mjs';
import { connectMongoose, disconnectMongoose } from '../../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

async function fetchAllPokeMoves() {
  try {
    const res = await PokeMoveModel.find({}).lean();
    return res;
  } catch (error) {
    console.error(`error: fetchAllPokeMoves ${error.message}`);
    return error;
  }
}

async function fetchIdByPokeKey(pokeKey) {
  try {
    const query = { pokeKey };
    const projection = {
      id: 1,
    };

    const res = await PokeModel.findOne(query, projection).lean();

    return res;
  } catch (error) {
    console.error(`error: fetchAllPokeMoves ${error.message}`);
    return error;
  }
}

async function updateDetailMovesField(id, moves) {
  try {
    const query = { id: Number(id) };
    const update = { moves };
    const option = { new: true };

    const res = await DetailModel.findOneAndUpdate(
      query,
      update,
      option,
    );

    console.log(`sucess ${id} update poke`);
    return res;
  } catch (error) {
    console.error(`error updateDetailMovesField ${error.message}`);
    return error;
  }
}

async function main() {
  try {
    await connectMongoose();
    const allMoves = await fetchAllPokeMoves();

    const idAndMoves = await Promise.all(allMoves.map(async ({ pokeKey, moves }) => {
      const { id } = await fetchIdByPokeKey(pokeKey);
      return { id, moves };
    }));

    await Promise.all(idAndMoves.map(({ id, moves }) => updateDetailMovesField(id, moves)));

    await disconnectMongoose();
  } catch (erorr) {
    console.error(`error main: ${erorr.mesage}`);
  }
}

main();
