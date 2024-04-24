const EVOLUTION_CHAIN = {
  chain1: [
    [
      {
        id: 1,
        detail: [],
        next: [
          {
            id: 2,
            detail: [
              {
                triger: 'level-up',
                condition: '16',
              },
            ],
            next: [
              {
                id: 3,
                detail: [
                  {
                    triger: 'level-up',
                    condition: '32',
                  },
                ],
                next: [],
              },
            ],
          },
        ],
      },
    ],
  ],
  chain2: [
    [
      {
        id: 4,
        detail: [],
        next: [
          {
            id: 5,
            detail: ['min-level:16'],
            next: [
              {
                id: 6,
                detail: ['min-level:36'],
                next: [],
              },
            ],
          },
        ],
      },
    ],
  ],
  chain3: [
    [
      {
        id: 7,
        detail: [],
        next: [
          {
            id: 8,
            detail: ['min-level:16'],
            next: [
              {
                id: 9,
                detail: ['min-level:36'],
                next: [],
              },
            ],
          },
        ],
      },
    ],
  ],
  chain4: [
    [
      {
        id: 10,
        detail: [],
        next: [
          {
            id: 11,
            detail: ['min-level:7'],
            next: [
              {
                id: 12,
                detail: ['min-level:10'],
                next: [],
              },
            ],
          },
        ],
      },
    ],
  ],
  chain5: [
    [
      {
        id: 13,
        detail: [],
        next: [
          {
            id: 14,
            detail: ['min-level:7'],
            next: [
              {
                id: 15,
                detail: ['min-level:10'],
                next: [],
              },
            ],
          },
        ],
      },
    ],
  ],
  chain6: [
    [
      {
        id: 16,
        detail: [],
        next: [
          {
            id: 17,
            detail: ['min-level:18'],
            next: [
              {
                id: 18,
                detail: ['min-level:36'],
                next: [],
              },
            ],
          },
        ],
      },
    ],
  ],
  chain7: [
    [
      {
        id: 19,
        detail: [],
        next: [
          {
            id: 2,
            detail: ['min-level:20'],
            next: [],
          },
        ],
      },
    ],
    [
      {
        id: 10091,
        detail: [],
        next: [
          {
            id: 10092,
            detail: ['min-level:20', 'time:night'],
            next: [],
          },
        ],
      },
    ],
  ],
  chain8: [
    [
      {
        id: 21,
        detail: [],
        next: [
          {
            id: 22,
            detail: ['min-level:20'],
            next: [],
          },
        ],
      },
    ],
  ],
  chain9: [
    [
      {
        id: 23,
        detail: [],
        next: [
          {
            id: 24,
            detail: ['min-level:22'],
            next: [],
          },
        ],
      },
    ],
  ],
  chain10: [
    [
      {
        id: 172,
        detail: [],
        next: [
          {
            id: 25,
            detail: ['friendship:220', 'min-level'],
            next: [
              { id: 26, detail: ['thunder-stone'] },
              { id: 10100, detail: ['thunder-stone', 'in alola'] },
            ],
          },
        ],
      },
    ],
  ],
};