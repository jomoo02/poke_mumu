const chain7 = {
  chainIndex: 7,
  chain: [
    {
      name: 'rattata',
      to: [{
        name: 'raticate',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 20]],
        }],
        id: '20',
      }],
      detail: [],
      id: '19',
    },
    {
      name: 'rattata',
      to: [{
        name: 'raticate',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 20],
            ['time_of_day', 'night'],
          ],
        }],
        id: '10092',
      }],
      detail: [],
      id: '10091',
    },
  ],
};

const chain10 = {
  chainIndex: 10,
  chain: [
    {
      name: 'pichu',
      to: [{
        name: 'pikachu',
        to: [
          {
            name: 'raichu',
            to: [],
            detail: [{
              trigger: 'use-item',
              condition: [
                ['item', 'thunder-stone'],
              ],
            }],
            id: '26',
          },
          {
            name: 'raichu',
            to: [],
            detail: [{
              trigger: 'use-item',
              condition: [
                ['item', 'thunder-stone'],
                ['location', 'alola'],
              ],
            }],
            id: '10100',
          },
        ],
        detail: [{
          trigger: 'level-up',
          condition: [['min_happiness', 220]],
        }],
        id: '25',
      }],
      detail: [],
      id: '172',
    },
  ],
};

export default function editEvolutionChains(chains) {
  const editChains = [...chains];
  editChains[6] = chain7;
  editChains[9] = chain10;
  return editChains;
}
