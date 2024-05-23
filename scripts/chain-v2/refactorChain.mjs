import dotenv from 'dotenv';
import ChainV2Model from '../../app/models/ChainV2.mjs';
import { connectMongoose, disconnectMongoose } from '../../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

// const updateChainInfo = [
//   {
//     index: 340,
//     chain: [
//       {
//         id: '1012',
//         detail: [],
//         name: {
//           en: 'Poltchageist(Counterfeit Form)',
//           ko: '차데스(가짜배기의 모습)',
//         },
//         from: '',
//         to: [{
//           id: '1013',
//           detail: [{
//             trigger: 'use-item',
//             condition: [{
//               key: 'item',
//               value: 'unremarkable-teacup',
//             }],
//           }],
//           name: {
//             en: 'Sinistcha(Unremarkable Form)',
//             ko: '그우린차(범작의 모습)',
//           },
//           from: '1012',
//           to: [],
//         }],
//       },
//       {
//         id: '1012',
//         detail: [],
//         name: {
//           en: 'Poltchageist(Artisan Form)',
//           ko: '차데스(알짜배기의 모습)',
//         },
//         from: '',
//         to: [{
//           id: '1013',
//           detail: [{
//             trigger: 'use-item',
//             condition: [{
//               key: 'item',
//               value: 'masterpiece-teacup',
//             }],
//           }],
//           name: {
//             en: 'Sinistcha(Masterpiece Form)',
//             ko: '그우린차(걸작의 모습)',
//           },
//           from: '1012',
//           to: [],
//         }],
//       },
//     ],
//   },
// ];

// const updateChainInfo = [
//   {
//     index: 199,
//     chain: [
//       {
//         id: '550',
//         detail: [],
//         from: '',
//         to: [],
//         name: {
//           en: 'Basculin(Red-Striped Form)',
//           ko: '배쓰나이(적색근의 모습)',
//         },
//       },
//       {
//         id: '10016',
//         detail: [],
//         from: '',
//         to: [],
//         name: {
//           en: 'Basculin(Blue-Striped Form)',
//           ko: '배쓰나이(청색근의 모습)',
//         },
//       },
//       {
//         id: '10247',
//         detail: [],
//         from: '',
//         to: [
//           {
//             id: '902',
//             detail: [{
//               trigger: 'level-up',
//               condition: [
//                 {
//                   key: 'gender',
//                   value: 2,
//                 },
//                 {
//                   key: 'recoil-damage',
//                   value: 294,
//                 },
//               ],
//             }],
//             from: '10247',
//             to: [],
//             name: {
//               en: 'Basculegion(Male)',
//               ko: '대쓰여너(수컷)',
//             },
//           },
//           {
//             id: '10248',
//             detail: [{
//               trigger: 'level-up',
//               condition: [
//                 {
//                   key: 'gender',
//                   value: 1,
//                 },
//                 {
//                   key: 'recoil-damage',
//                   value: 294,
//                 },
//               ],
//             }],
//             from: '10247',
//             to: [],
//             name: {
//               en: 'Basculegion(Female)',
//               ko: '대쓰여너(암컷)',
//             },
//           },
//         ],
//         name: {
//           en: 'Basculin(White-Striped Form)',
//           ko: '배쓰나이(백색근의 모습)',
//         },
//       },
//     ],
//   },
// ];

// const updateChainInfo = [
//   {
//     index: 340,
//     chain: [
//       {
//         id: '1012',
//         detail: [],
//         name: {
//           en: 'Poltchageist(Counterfeit Form)',
//           ko: '차데스(가짜배기의 모습)',
//         },
//         from: '',
//         to: [{
//           id: '1013',
//           detail: [{
//             trigger: 'use-item',
//             condition: [{
//               key: 'item',
//               value: 'unremarkable-teacup',
//             }],
//           }],
//           name: {
//             en: 'Sinistcha(Unremarkable Form)',
//             ko: '그우린차(범작의 모습)',
//           },
//           from: '1012',
//           to: [],
//         }],
//       },
//       {
//         id: '1012',
//         detail: [],
//         name: {
//           en: 'Poltchageist(Artisan Form)',
//           ko: '차데스(알짜배기의 모습)',
//         },
//         from: '',
//         to: [{
//           id: '1013',
//           detail: [{
//             trigger: 'use-item',
//             condition: [{
//               key: 'item',
//               value: 'masterpiece-teacup',
//             }],
//           }],
//           name: {
//             en: 'Sinistcha(Masterpiece Form)',
//             ko: '그우린차(걸작의 모습)',
//           },
//           from: '1012',
//           to: [],
//         }],
//       },
//     ],
//   },
// ];

const updateChainInfo = [
  {
    index: 301,
    chain: [
      {
        id: '854',
        detail: [],
        name: {
          en: 'Poltchageist(Phony Form)',
          ko: '데인차(위작폼)',
        },
        from: '',
        to: [{
          id: '855',
          detail: [{
            trigger: 'use-item',
            condition: [{
              key: 'item',
              value: 'cracked-pot',
            }],
          }],
          name: {
            en: 'Sinistcha(Phony Form)',
            ko: '포트데스(위작폼)',
          },
          from: '854',
          to: [],
        }],
      },
      {
        id: '854',
        detail: [],
        name: {
          en: 'Poltchageist(Antique Form)',
          ko: '데인차(진작폼)',
        },
        from: '',
        to: [{
          id: '855',
          detail: [{
            trigger: 'use-item',
            condition: [{
              key: 'item',
              value: 'chipped-pot',
            }],
          }],
          name: {
            en: 'Sinistcha(Antique Form)',
            ko: '포트데스(진작폼)',
          },
          from: '854',
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
