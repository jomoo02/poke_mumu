import dotenv from 'dotenv';
import PokeModel from '../app/models/Poke.mjs';
import getPokes from './pokeapi/poke.mjs';
import { connectMongoose, disconnectMongoose } from '../app/api/db/connect.js';

dotenv.config({ path: '.env.local' });

async function createPoke(pokeData, order) {
  const {
    name, sprity, types, id, no, form, key,
  } = pokeData;

  try {
    const findPoke = await PokeModel.findOne({ key }).lean();

    if (findPoke) {
      console.log(`${name.ko} 이미 존재하는 포켓몬`);
      return false;
    }

    const pokeModel = new PokeModel({
      id,
      no,
      key,
      types,
      form,
      name,
      sprity,
      order,
    });

    await PokeModel.create(pokeModel);
  } catch (error) {
    console.log(error);
  }
  console.log(`${name?.ko} 저장 완료`);
  return true;
}

async function seedPokes(range, initOrder) {
  const pokes = [];
  let order = initOrder;

  for (let i = range; i < range + 3; i += 1) {
    pokes.push(getPokes(i));
  }

  const pokeDatas = [].concat(...(await Promise.all(pokes)));

  await Promise.all(pokeDatas.map((pokeData) => {
    order += 1;
    return createPoke(pokeData, order);
  }));

  return order;
}

async function main() {
  await connectMongoose();
  let order = 0;

  order = await seedPokes(0, order);
  order = await seedPokes(3, order);
  order = await seedPokes(6, order);
  await seedPokes(9, order);

  await disconnectMongoose();
}

main();
