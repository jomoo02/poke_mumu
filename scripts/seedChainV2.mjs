import dotenv from 'dotenv';
import ChainModel from '../app/models/Chain.mjs';
import ChainV2Model from '../app/models/ChainV2.mjs';
import updateChainV2 from './chain-v2/chain.mjs';
import { connectMongoose, disconnectMongoose } from '../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

async function fetchChainModels() {
  try {
    const chainModels = await ChainModel.find({}).lean();
    return chainModels;
  } catch (error) {
    console.error(`fetchChainModels error ${error.message}`);
    return error;
  }
}

async function createChainV2({ index, chain, ids }) {
  try {
    const foundChain = await ChainV2Model.findOne({ index }).lean();

    if (foundChain) {
      console.log(`${index} chainV2는 존재하는 체인`);
      return false;
    }

    const chainV2Model = new ChainV2Model({
      index,
      chain,
      ids,
    });

    await ChainV2Model.create(chainV2Model);
    console.log(`${index} chain 저장`);
  } catch (error) {
    console.error(`createChainV2 error ${error.message}`);
  }
  return true;
}

async function main() {
  try {
    await connectMongoose();

    const chainModels = await fetchChainModels();

    const updatedChains = await updateChainV2(chainModels);

    await Promise.all(updatedChains.map(createChainV2));

    await disconnectMongoose();
  } catch (error) {
    console.error(`main error ${error.message}`);
  }
}

main();
