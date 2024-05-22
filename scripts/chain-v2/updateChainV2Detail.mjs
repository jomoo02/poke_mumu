import dotenv from 'dotenv';
import ChainV2Model from '../../app/models/ChainV2.mjs';
import { connectMongoose, disconnectMongoose } from '../../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

async function fetchAllChain() {
  try {
    const query = {};
    const projection = {
      chain: 1,
      index: 1,
    };
    const allChains = await ChainV2Model
      .find(query, projection)
      .sort({ index: 1 })
      .lean();

    return allChains;
  } catch (error) {
    console.error(`error fetchAllCahin: ${error.message}`);
    return error;
  }
}

function refactorChainDetail(detail) {
  if (detail.length > 0) {
    return detail.map(({ condition, trigger }) => {
      const afterCondition = condition.map(([key, value]) => ({ key, value }));
      return {
        trigger,
        condition: afterCondition,
      };
    });
  }
  return [];
}

function serachRecursiveChain(chain) {
  return chain.map((c) => {
    const refactorDetail = refactorChainDetail(c.detail);

    if (c.to.length > 0) {
      return {
        ...c,
        to: serachRecursiveChain(c.to),
        detail: refactorDetail,
      };
    }
    return {
      ...c,
      detail: refactorDetail,
    };
  });
}

async function updateChain({ index, chain }) {
  try {
    const updatedDetailChain = serachRecursiveChain(chain);

    const query = { index };
    const update = { chain: updatedDetailChain };
    const option = { new: true };

    const updatedChain = await ChainV2Model.findOneAndUpdate(
      query,
      update,
      option,
    );

    console.log(`index ${index} chain update success`);
    return updatedChain;
  } catch (error) {
    console.error(`updateChain error index ${index}: ${error.message}`);
    return error;
  }
}

async function main() {
  try {
    await connectMongoose();

    const allChainInfo = await fetchAllChain();

    await Promise.all(allChainInfo.map((updateChain)));

    await disconnectMongoose();
  } catch (error) {
    console.error(`main error: ${error.message}`);
  }
}

main();
