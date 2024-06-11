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

async function refactorDefaultForm({ order, form }) {
  try {
    const query = { order };
    const update = { form };
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

function filterDefaultForm(data) {
  return data
    .filter(({ form }) => form.en === 'default')
    .map((d) => ({ ...d, form: { en: 'default', ko: '기본 모습' } }));
}

async function main() {
  try {
    await connectMongoose();

    const data = await fecthAllPokeNameAndForm();
    const filterdForms = filterDefaultForm(data);

    console.log(filterdForms);
    await Promise.all(filterdForms.map(refactorDefaultForm));

    await disconnectMongoose();
  } catch (error) {
    console.error(`main error: ${error.message}`);
  }
}

main();
