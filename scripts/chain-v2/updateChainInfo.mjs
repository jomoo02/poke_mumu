import dotenv from 'dotenv';
import ChainV2Model from '../../app/models/ChainV2.mjs';
import { connectMongoose, disconnectMongoose } from '../../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

async function fetchAllChain() {
  try {
    const query = {};
    const projection = {
      index: 1,
      chain: 1,
    };

    const allChainIndex = await ChainV2Model
      .find(query, projection)
      .sort({ index: 1 })
      .lean();

    return allChainIndex;
  } catch (error) {
    console.error(`fetchAllChain error: ${error.message}`);
    return error;
  }
}

function calculateMaxDepth(chain) {
  let maxDepth = 0;

  const dfs = (node, depth) => {
    if (node.to.length === 0) {
      maxDepth = Math.max(maxDepth, depth + 1);
      return;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const next of node.to) {
      dfs(next, depth + 1);
    }
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const node of chain) {
    dfs(node, 0);
  }

  return maxDepth;
}

function calculateMaxWidth(chain) {
  const levels = [];

  const dfs = (node, depth) => {
    if (!levels[depth]) {
      levels[depth] = 0;
    }
    levels[depth] += 1;

    // eslint-disable-next-line no-restricted-syntax
    for (const next of node.to) {
      dfs(next, depth + 1);
    }
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const node of chain) {
    dfs(node, 0);
  }

  return Math.max(...levels);
}

async function updateChain({ index, chain }) {
  try {
    const maxDepth = calculateMaxDepth(chain);
    const maxWidth = calculateMaxWidth(chain);

    const query = { index };
    const update = { maxDepth, maxWidth };
    const option = { new: true };

    const updatedChain = await ChainV2Model.findOneAndUpdate(
      query,
      update,
      option,
    );
    console.log(`${index} chain update!`);
    return updatedChain;
  } catch (error) {
    console.error(`updateChain error: ${error.message}`);
    return error;
  }
}

async function main() {
  try {
    await connectMongoose();
    const allChain = await fetchAllChain();

    await Promise.all(allChain.map(updateChain));

    await disconnectMongoose();
  } catch (error) {
    console.error(`main error: ${error.message}}`);
  }
}

main();
