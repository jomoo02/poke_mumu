import dotenv from 'dotenv';
import ChainModel from '../app/models/Chain.mjs';
import fetchEvolutionChain from './chain/chains.mjs';
import { connectMongoose, disconnectMongoose } from '../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

async function createChain(chainData) {
  const {
    chainIndex, chain, ids,
  } = chainData;

  try {
    const findChain = await ChainModel.findOne({ chainIndex }).lean();

    if (findChain) {
      console.log(`chainIndex: ${chainIndex}는 이미 존재하는 체인`);
      return false;
    }

    const chainModel = new ChainModel({
      chainIndex,
      chain,
      ids,
    });

    await ChainModel.create(chainModel);
  } catch (error) {
    console.log(error);
  }
  console.log(`${chainIndex} 체인 저장 완료`);
  return true;
}

async function main() {
  await connectMongoose();

  const chains1 = await fetchEvolutionChain();
  await Promise.all(chains1.map((chain) => createChain(chain)));
  await disconnectMongoose();
}

main();
