import dotenv from 'dotenv';
import PokeModel from '../../app/models/Poke.mjs';
import { connectMongoose, disconnectMongoose } from '../../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

async function fecthAllPokeNameAndForm() {
  try {
    const query = { };
    const projection = {
      _id: 0,
      name: 1,
      form: 1,
      order: 1,
    };
    const result = await PokeModel
      .find(query, projection)
      .sort({ order: 1 })
      .lean();

    return result;
  } catch (error) {
    console.error(error);
    return '';
  }
}

async function addKeyFiled({ key, order }) {
  try {
    const query = { order };
    const update = { key };
    const option = { new: true };

    const updatePokeModel = await PokeModel.findOneAndUpdate(
      query,
      update,
      option,
    );

    console.log(`success order:${order} pokeModel update`);
    return updatePokeModel;
  } catch (error) {
    console.error(`error addKeyFiled: ${error.message}`);
    return error;
  }
}

function makeAllPokeKey(data) {
  return data.map(({ name: { en: name }, form: { en: form }, order }) => {
    const organizedName = name.split(' ').join('-');
    const organizedForm = form.replaceAll(' / ', '-').split(' ').join('-');
    const pokeKey = (['default', 'mega'].includes(organizedForm) ? organizedName : `${organizedName}-${organizedForm}`).toLowerCase();

    return {
      pokeKey,
      order,
    };
  });
}

async function main() {
  try {
    await connectMongoose();

    const data = await fecthAllPokeNameAndForm();
    const allkey = makeAllPokeKey(data);

    await Promise.all(allkey.map(addKeyFiled));

    await disconnectMongoose();
  } catch (error) {
    console.error(`main error: ${error.message}`);
  }
}

main();
