import dotenv from 'dotenv';
import PokeModel from '../app/models/Poke.mjs';
import DetailModel from '../app/models/Detail.mjs';
import { connectMongoose, disconnectMongoose } from '../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

async function fetchAllPoke() {
  try {
    const query = {};
    const projection = {
      pokeKey: 1,
      name: 1,
    };
    const res = await PokeModel.find(query, projection).lean();
    return res;
  } catch (error) {
    console.error(`error fetchAllPoke: ${error.message}`);
    return error;
  }
}

async function updateDetailPokeKey({ pokeKey, name }) {
  try {
    const query = { 'speciesName.en': name.en };
    const update = { pokeKey };

    await DetailModel.findOneAndUpdate(query, update);
  } catch (error) {
    console.error(`error updateDetailPokeKey: ${error.message}`);
  }
}

async function main() {
  try {
    await connectMongoose();

    const allPokeIdAndPokeKey = await fetchAllPoke();

    await Promise.all(allPokeIdAndPokeKey.map(updateDetailPokeKey));

    await disconnectMongoose();
  } catch (error) {
    console.error(`error main ${error.message}`);
  }
}

main();
