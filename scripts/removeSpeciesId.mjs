import dotenv from 'dotenv';
import DetailModel from '../app/models/Detail.mjs';
import { connectMongoose, disconnectMongoose } from '../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

async function update() {
  try {
    await connectMongoose();
    await DetailModel.updateMany({}, { $unset: { speciesId: 1 } }, { strict: false });
    await disconnectMongoose();
  } catch (error) {
    console.error(error.message);
  }
}

update();
