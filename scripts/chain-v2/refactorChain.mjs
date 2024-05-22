import dotenv from 'dotenv';
import ChainV2Model from '../../app/models/ChainV2.mjs';
import { connectMongoose, disconnectMongoose } from '../../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

const updateChainInfo = [
  {
    index: 340,
    chain: [
      {
        id: '1012',
        detail: [],
        name: {
          en: 'Poltchageist(Counterfeit Form)',
          ko: '차데스(가짜배기의 모습)',
        },
        from: '',
        to: [{
          id: '1013',
          detail: [{
            trigger: 'use-item',
            condition: [{
              key: 'item',
              value: 'unremarkable-teacup',
            }],
          }],
          name: {
            en: 'Sinistcha(Unremarkable Form)',
            ko: '그우린차(범작의 모습)',
          },
          from: '1012',
          to: [],
        }],
      },
      {
        id: '1012',
        detail: [],
        name: {
          en: 'Poltchageist(Artisan Form)',
          ko: '차데스(알짜배기의 모습)',
        },
        from: '',
        to: [{
          id: '1013',
          detail: [{
            trigger: 'use-item',
            condition: [{
              key: 'item',
              value: 'masterpiece-teacup',
            }],
          }],
          name: {
            en: 'Sinistcha(Masterpiece Form)',
            ko: '그우린차(걸작의 모습)',
          },
          from: '1012',
          to: [],
        }],
      },
    ],
  },
];

async function updateChain({ index, chain }) {
  try {
    const query = { index };
    const update = { chain };
    const option = { new: true };

    const updateChainModel = await ChainV2Model.findOneAndUpdate(
      query,
      update,
      option,
    );

    console.log(`success ${index} chainV2model update`);
    return updateChainModel;
  } catch (error) {
    console.error(`updatChain error ${index} : ${error.message}`);
    return error;
  }
}

async function main() {
  try {
    await connectMongoose();

    await Promise.all(updateChainInfo.map(updateChain));

    await disconnectMongoose();
  } catch (error) {
    console.error(`main error: ${error.message}`);
  }
}

main();
