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

const chain11 = {
  chainIndex: 11,
  chain: [
    {
      name: 'sandshrew',
      to: [{
        name: 'sandslash',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 22]],
        }],
        id: '28',
      }],
      detail: [],
      id: '27',
    },
    {
      name: 'sandshrew',
      to: [{
        name: 'sandslash',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [['item', 'ice-stone']],
        }],
        id: '10102',
      }],
      detail: [],
      id: '10101',
    },
  ],
};

const chain15 = {
  chainIndex: 15,
  chain: [
    {
      name: 'vulpix',
      to: [{
        name: 'ninetales',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [['item', 'fire-stone']],
        }],
        id: '38',
      }],
      detail: [],
      id: '37',
    },
    {
      name: 'vulpix',
      to: [{
        name: 'ninetales',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [['item', 'ice-stone']],
        }],
        id: '10104',
      }],
      detail: [],
      id: '10103',
    },
  ],
};

const chain21 = {
  chainIndex: 21,
  chain: [
    {
      name: 'diglett',
      to: [{
        name: '',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 26]],
        }],
        id: '51',
      }],
      detail: [],
      id: '50',
    },
    {
      name: 'diglett',
      to: [{
        name: '',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 26]],
        }],
        id: '10106',
      }],
      detail: [],
      id: '10105',
    },
  ],
};

const chain22 = {
  chainIndex: 22,
  chain: [
    {
      name: 'meowth',
      to: [{
        name: 'persian',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 28]],
        }],
        id: '53',
      }],
      detail: [],
      id: '52',
    },
    {
      name: 'meowth',
      to: [{
        name: 'persian',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_happiness', 160]],
        }],
        id: '10108',
      }],
      detail: [],
      id: '10107',
    },
    {
      name: 'meowth',
      to: [{
        name: 'perrserker',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 28]],
        }],
        id: '863',
      }],
      detail: [],
      id: '10161',
    },
  ],
};

const chain24 = {
  chainIndex: 24,
  chain: [{
    name: 'mankey',
    to: [{
      name: 'primeape',
      to: [{
        name: 'annihilape',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['other', '분노의주먹을 20번 사용 후 레벨업'],
          ],
        }],
        id: '979',
      }],
      detail: [{
        trigger: 'level-up',
        condition: [['min_level', 28]],
      }],
      id: '57',
    }],
    detail: [],
    id: '56',
  }],
};

const chain25 = {
  chainIndex: 25,
  chain: [
    {
      name: 'growlithe',
      to: [{
        name: 'arcanine',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [['item', 'fire-stone']],
        }],
        id: '59',
      }],
      detail: [],
      id: '58',
    },
    {
      name: 'growlithe',
      to: [{
        name: 'arcanine',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [['item', 'fire-stone']],
        }],
        id: '10230',
      }],
      detail: [],
      id: '10229',
    },
  ],
};

const chain31 = {
  chainIndex: 31,
  chain: [
    {
      name: 'geodude',
      to: [{
        name: 'graveler',
        to: [{
          name: 'golem',
          to: [],
          detail: [{
            trigger: 'trade',
            condition: [],
          }],
          id: '76',
        }],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 25]],
        }],
        id: '75',
      }],
      detail: [],
      id: '74',
    },
    {
      name: 'geodude',
      to: [{
        name: 'graveler',
        to: [{
          name: 'golem',
          to: [],
          detail: [{
            trigger: 'trade',
            condition: [],
          }],
          id: '10111',
        }],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 25]],
        }],
        id: '10110',
      }],
      detail: [],
      id: '10109',
    },
  ],
};

const chain32 = {
  chainIndex: 32,
  chain: [
    {
      name: 'ponyta',
      to: [{
        name: 'rapidash',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 40]],
        }],
        id: '78',
      }],
      detail: [],
      id: '77',
    },
    {
      name: 'ponyta',
      to: [{
        name: 'rapidash',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 40]],
        }],
        id: '10163',
      }],
      detail: [],
      id: '10162',
    },
  ],
};

const chain33 = {
  chainIndex: 33,
  chain: [
    {
      name: 'slowpoke',
      to: [
        {
          name: 'slowbro',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [['min_level', 37]],
          }],
          id: '80',
        },
        {
          name: 'slowking',
          to: [],
          detail: [{
            trigger: 'trade',
            condition: [['held_item', 'kings-rock']],
          }],
          id: '199',
        },
      ],
      detail: [],
      id: '79',
    },
    {
      name: 'slowpoke',
      to: [
        {
          name: 'slowbro',
          to: [],
          detail: [{
            trigger: 'use-item',
            condition: [['item', 'galarica-cuff']],
          }],
          id: '10165',
        },
        {
          name: 'slowking',
          to: [],
          detail: [{
            trigger: 'use-item',
            condition: [['item', 'galarica-wreath']],
          }],
          id: '10172',
        },
      ],
      detail: [],
      id: '10164',
    },
  ],
};

const chain35 = {
  chainIndex: 35,
  chain: [
    {
      name: 'farfetchd',
      to: [],
      detail: [],
      id: '83',
    },
    {
      name: 'farfetchd',
      to: [{
        name: 'sirfetchd',
        to: [],
        detail: [{
          trigger: 'other',
          condition: [['other', 'three-critical-hits']],
        }],
        id: '865',
      }],
      detail: [],
      id: '10166',
    },
  ],
};

const chain38 = {
  chainIndex: 38,
  chain: [
    {
      name: 'grimer',
      to: [{
        name: 'muk',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 38]],
        }],
        id: '89',
      }],
      detail: [],
      id: '88',
    },
    {
      name: 'grimer',
      to: [{
        name: 'muk',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 38]],
        }],
        id: '10113',
      }],
      detail: [],
      id: '10112',
    },
  ],
};

const chain44 = {
  chainIndex: 44,
  chain: [
    {
      name: 'voltorb',
      to: [{
        name: 'electrode',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 30]],
        }],
        id: '101',
      }],
      detail: [],
      id: '100',
    },
    {
      name: 'voltorb',
      to: [{
        name: 'electrode',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [['item', 'leaf-stone']],
        }],
        id: '10232',
      }],
      detail: [],
      id: '10231',
    },
  ],
};

const chain45 = {
  chainIndex: 45,
  chain: [
    {
      name: 'exeggcute',
      to: [
        {
          name: 'exeggutor',
          to: [],
          detail: [{
            trigger: 'use-item',
            condition: [['item', 'leaf-stone']],
          }],
          id: '103',
        },
        {
          name: 'exeggutor',
          to: [],
          detail: [{
            trigger: 'use-item',
            condition: [
              ['item', 'leaf-stone'],
              ['location', 'alola'],
            ],
          }],
          id: '10114',
        },
      ],
      detail: [],
      id: '102',
    },
  ],
};

const chain46 = {
  chainIndex: 46,
  chain: [
    {
      name: 'cubone',
      to: [
        {
          name: 'marowak',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [['min_level', 28]],
          }],
          id: '105',
        },
        {
          name: 'marowak',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['min_level', 28],
              ['time_of_dy', 'night'],
            ],
          }],
          id: '10115',
        },
      ],
      detail: [],
      id: '104',
    },
  ],
};

const chain49 = {
  chainIndex: 49,
  chain: [
    {
      name: 'koffing',
      to: [
        {
          name: 'weezing',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [['min_level', 35]],
          }],
          id: '110',
        },
        {
          name: 'weezing',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['min_level', 35],
              ['location', 'galar'],
            ],
          }],
          id: '10167',
        },
      ],
      detail: [],
      id: '109',
    },
  ],
};

const chain57 = {
  chainIndex: 57,
  chain: [
    {
      name: 'mime-jr',
      to: [
        {
          name: 'mr-mime',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [['known_move', 'mimic']],
          }],
          id: '122',
        },
        {
          name: 'mr-mime',
          to: [
            {
              name: 'mr-rime',
              to: [],
              detail: [{
                trigger: 'level-up',
                condition: [['min_level', 42]],
              }],
              id: '866',
            },
          ],
          detail: [{
            trigger: 'level-up',
            condition: [['known_move', 'mimic']],
          }],
          id: '10168',
        },
      ],
      detail: [],
      id: '439',
    },
  ],
};

const chain63 = {
  chainIndex: 63,
  chain: [
    {
      name: 'tauros',
      to: [],
      detail: [],
      id: '128',
    },
    {
      name: 'tauros',
      to: [],
      detail: [],
      id: '10250',
    },
    {
      name: 'tauros',
      to: [],
      detail: [],
      id: '10251',
    },
    {
      name: 'tauros',
      to: [],
      detail: [],
      id: '10252',
    },
  ],
};

const chain73 = {
  chainIndex: 73,
  chain: [
    {
      name: 'articuno',
      to: [],
      detail: [],
      id: '144',
    },
    {
      name: 'articuno',
      to: [],
      detail: [],
      id: '10169',
    },
  ],
};

const chain74 = {
  chainIndex: 74,
  chain: [
    {
      name: 'zapdos',
      to: [],
      detail: [],
      id: '145',
    },
    {
      name: 'zapdos',
      to: [],
      detail: [],
      id: '10170',
    },
  ],
};

const chain75 = {
  chainIndex: 75,
  chain: [
    {
      name: 'moltres',
      to: [],
      detail: [],
      id: '146',
    },
    {
      name: 'moltres',
      to: [],
      detail: [],
      id: '10171',
    },
  ],
};

const chain80 = {
  chainIndex: 80,
  chain: [{
    name: 'cyndaquil',
    to: [{
      name: 'quilava',
      to: [
        {
          name: 'typhlosion',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [['min_level', 36]],
          }],
          id: '157',
        },
        {
          name: 'typhlosion',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['min_level', 36],
              ['location', 'hisui'],
            ],
          }],
          id: '10233',
        },
      ],
      detail: [{
        trigger: 'level-up',
        condition: [['min_level', 14]],
      }],
      id: '156',
    }],
    detail: [],
    id: '155',
  }],
};

const chain96 = {
  chainIndex: 96,
  chain: [
    {
      name: 'wooper',
      to: [{
        name: 'quagsire',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 20]],
        }],
        id: '195',
      }],
      detail: [],
      id: '194',
    },
    {
      name: 'wooper',
      to: [{
        name: 'clodsire',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 20]],
        }],
        id: '980',
      }],
      detail: [],
      id: '10253',
    },
  ],
};

const chain106 = {
  chainIndex: 106,
  chain: [
    {
      name: 'qwilfish',
      to: [],
      detail: [],
      id: '211',
    },
    {
      name: 'qwilfish',
      to: [{
        name: 'overqwil',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['known_move', 'barb-barrage']],
        }],
        id: '904',
      }],
      detail: [],
      id: '10234',
    },
  ],
};

const chain109 = {
  chainIndex: 109,
  chain: [
    {
      name: 'sneasel',
      to: [{
        name: 'weavile',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['held_item', 'razor-claw'],
            ['time_of_day', 'night'],
          ],
        }],
        id: '461',
      }],
      detail: [],
      id: '215',
    },
    {
      name: 'sneasel',
      to: [{
        name: 'sneasler',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['held_item', 'razor-claw'],
            ['time_of_day', 'day'],
          ],
        }],
        id: '903',
      }],
      detail: [],
      id: '10235',
    },
  ],
};

const chain113 = {
  chainIndex: 113,
  chain: [
    {
      name: 'corsola',
      to: [],
      detail: [],
      id: '222',
    },
    {
      name: 'corsola',
      to: [{
        name: 'sneasler',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 38]],
        }],
        id: '864',
      }],
      detail: [],
      id: '10173',
    },
  ],
};

const chain134 = {
  chainIndex: 134,
  chain: [
    {
      name: 'zigzagoon',
      to: [{
        name: 'linoone',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 20]],
        }],
        id: '264',
      }],
      detail: [],
      id: '263',
    },
    {
      name: 'zigzagoon',
      to: [{
        name: 'linoone',
        to: [{
          name: 'obstagoon',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['min_level', 35],
              ['time_of_day', 'night'],
            ],
          }],
          id: '862',
        }],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 20]],
        }],
        id: '10175',
      }],
      detail: [],
      id: '10174',
    },
  ],
};

const chain144 = {
  chainIndex: 144,
  chain: [{
    name: 'nincada',
    to: [
      {
        name: 'ninjask',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 20]],
        }],
        id: '291',
      },
      {
        name: 'shedinja',
        to: [],
        detail: [{
          trigger: 'other',
          condition: [['other', 'empty spot in party, Pokeball in bag']],
        }],
        id: '292',
      },
    ],
    detail: [],
    id: '290',
  }],
};

const chain178 = {
  chainIndex: 178,
  chain: [{
    name: 'feebas',
    to: [{
      name: 'milotic',
      to: [],
      detail: [
        {
          trigger: 'level-up',
          condition: [['min_beauty', 'max']],
        },
        {
          trigger: 'trade',
          condition: [['held_item', 'prism-scale']],
        },
      ],
      id: '350',
    }],
    detail: [],
    id: '349',
  }],
};

const chain250 = {
  chainIndex: 250,
  chain: [
    {
      name: 'oshawott',
      to: [{
        name: 'dewott',
        to: [
          {
            name: 'samurott',
            to: [],
            detail: [{
              trigger: 'level-up',
              condition: [['min_level', 36]],
            }],
            id: '503',
          },
          {
            name: 'samurott',
            to: [],
            detail: [{
              trigger: 'level-up',
              condition: [
                ['min_level', 36],
                ['location', 'hisui'],
              ],
            }],
            id: '10236',
          },
        ],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 17]],
        }],
        id: '502',
      }],
      detail: [],
      id: '501',
    },
  ],
};

const chain271 = {
  chainIndex: 271,
  chain: [{
    name: 'petilil',
    to: [
      {
        name: 'lilligant',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [['item', 'sun-stone']],
        }],
        id: '549',
      },
      {
        name: 'lilligant',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [
            ['item', 'sun-stone'],
            ['location', 'hisui'],
          ],
        }],
        id: '10237',
      },
    ],
    detail: [],
    id: '548',
  }],
};

const chain274 = {
  chainIndex: 274,
  chain: [
    {
      name: 'darumaka',
      to: [
        {
          name: 'darmanitan',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [['min_level', 35]],
          }],
          id: '555',
        },
      ],
      detail: [],
      id: '554',
    },
    {
      name: 'darumaka',
      to: [
        {
          name: 'darmanitan',
          to: [],
          detail: [{
            trigger: 'use-item',
            condition: [['item', 'ice-stone']],
          }],
          id: '10177',
        },
      ],
      detail: [],
      id: '10176',
    },
  ],
};

const chain279 = {
  chainIndex: 279,
  chain: [
    {
      name: 'yamask',
      to: [
        {
          name: 'cofagrigus',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [['min_level', 34]],
          }],
          id: '563',
        },
      ],
      detail: [],
      id: '562',
    },
    {
      name: 'yamask',
      to: [
        {
          name: 'runerigus',
          to: [],
          detail: [{
            trigger: 'take-damage',
            condition: [
              ['damage', 49],
              ['location', '고인돌 아래를 지나간다'],
            ],
          }],
          id: '867',
        },
      ],
      detail: [],
      id: '10179',
    },
  ],
};

const chain283 = {
  chainIndex: 283,
  chain: [
    {
      name: 'zorua',
      to: [
        {
          name: 'zoroark',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [['min_level', 30]],
          }],
          id: '571',
        },
      ],
      detail: [],
      id: '570',
    },
    {
      name: 'zorua',
      to: [
        {
          name: 'zoroark',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [['min_level', 30]],
          }],
          id: '10239',
        },
      ],
      detail: [],
      id: '10238',
    },
  ],
};

const chain309 = {
  chainIndex: 309,
  chain: [{
    name: 'pawniard',
    to: [{
      name: 'bisharp',
      to: [{
        name: 'kingambit',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [[
            'other',
            "defeat 3 Bisharp that are holding Leader's Crest",
          ]],
        }],
        id: '983',
      }],
      detail: [{
        trigger: 'level-up',
        condition: [['min_level', 52]],
      }],
      id: '625',
    }],
    detail: [],
    id: '624',
  }],
};

const chain311 = {
  chainIndex: 311,
  chain: [{
    name: 'rufflet',
    to: [
      {
        name: 'braviary',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 54]],
        }],
        id: '628',
      },
      {
        name: 'braviary',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 54],
            ['location', 'hisui'],
          ],
        }],
        id: '10240',
      },
    ],
    detail: [],
    id: '627',
  }],
};

const chain340 = {
  chainIndex: 340,
  chain: [{
    name: 'espurr',
    to: [
      {
        name: 'meowstic',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 25],
            ['gender', 2],
          ],
        }],
        id: '678',
      },
      {
        name: 'meowstic',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 25],
            ['gender', 1],
          ],
        }],
        id: '10025',
      },
    ],
    detail: [],
    id: '677',
  }],
};

const chain354 = {
  chainIndex: 354,
  chain: [{
    name: 'goomy',
    to: [
      {
        name: 'sliggoo',
        to: [{
          name: 'goodra',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['min_level', 50],
              ['needs_overworld_rain', true],
            ],
          }],
          id: '706',
        }],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 40]],
        }],
        id: '705',
      },
      {
        name: 'sliggoo',
        to: [{
          name: 'goodra',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['min_level', 50],
              ['needs_overworld_rain', true],
            ],
          }],
          id: '10242',
        }],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 40],
            ['location', 'hisui'],
          ],
        }],
        id: '10241',
      },
    ],
    detail: [],
    id: '704',
  }],
};

const chain358 = {
  chainIndex: 358,
  chain: [{
    name: 'bergmite',
    to: [
      {
        name: 'avalugg',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [['min_level', 37]],
        }],
        id: '713',
      },
      {
        name: 'avalugg',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 37],
            ['location', 'hisui'],
          ],
        }],
        id: '10243',
      },
    ],
    detail: [],
    id: '712',
  }],
};

const chain366 = {
  chainIndex: 366,
  chain: [{
    name: 'rowlet',
    to: [{
      name: 'dartrix',
      to: [
        {
          name: 'decidueye',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['min_level', 34]],
          }],
          id: '724',
        },
        {
          name: 'decidueye',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['min_level', 36],
              ['location', 'hisui'],
            ],
          }],
          id: '10244',
        },
      ],
      detail: [{
        trigger: 'level-up',
        condition: [['min_level', 17]],
      }],
      id: '723',
    }],
    detail: [],
    id: '722',
  }],
};

const chain371 = {
  chainIndex: 371,
  chain: [{
    name: 'grubbin',
    to: [{
      name: 'charjabug',
      to: [{
        name: 'vikavolt',
        to: [],
        detail: [
          {
            trigger: 'level-up',
            condition: [
              ['location', '포니대협곡'],
            ],
          },
          {
            trigger: 'level-up',
            condition: [
              ['location', '화끈산'],
            ],
          },
          {
            trigger: 'use-item',
            condition: [
              ['item', 'thunder-stone']],
          },
        ],
        id: '738',
      }],
      detail: [{
        trigger: 'level-up',
        condition: [['min_level', 20]],
      }],
      id: '737',
    }],
    detail: [],
    id: '736',
  }],
};

const chain372 = {
  chainIndex: 372,
  chain: [{
    name: 'crabrawler',
    to: [{
      name: 'crabominable',
      to: [],
      detail: [
        {
          trigger: 'level-up',
          condition: [['location', 'mount-lanakila']],
        },
        {
          trigger: 'use-item',
          condition: [['item', 'ice-stone']],
        },
      ],
      id: '740',
    }],
    detail: [],
    id: '739',
  }],
};

const chain375 = {
  chainIndex: 375,
  chain: [
    {
      name: 'rockruff',
      to: [
        {
          name: 'lycanroc',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['min_level', 25],
              ['time_of_day', 'day'],
            ],
          }],
          id: '745',
        },
        {
          name: 'lycanroc',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['min_level', 25],
              ['time_of_day', 'night'],
            ],
          }],
          id: '10126',
        },
      ],
      detail: [],
      id: '744',
    },
    {
      name: 'rockruff(own tempo)',
      to: [{
        name: 'lycanroc',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 25],
            ['time_of_day', 'dusk'],
          ],
        }],
        id: '10152',
      }],
      detail: [],
      id: '744',
    },
  ],
};

const chain434 = {
  chainIndex: 434,
  chain: [{
    name: 'applin',
    to: [
      {
        name: 'flapple',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [
            ['item', '새콤한사과'],
          ],
        }],
        id: '841',
      },
      {
        name: 'appletun',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [
            ['item', '달콤한사과'],
          ],
        }],
        id: '842',
      },
      {
        name: 'dipplin',
        to: [{
          name: 'hydrapple',
          to: [],
          detail: [{
            trigger: 'level-up',
            condition: [
              ['known_move', '드래곤옐'],
            ],
          }],
          id: '1019',
        }],
        detail: [{
          trigger: 'use-item',
          condition: [
            ['item', '꿀맛사과'],
          ],
        }],
        id: '1011',
      },
    ],
    detail: [],
    id: '840',
  }],
};

const chain438 = {
  chainIndex: 438,
  chain: [{
    name: 'toxel',
    to: [
      {
        name: 'toxtricity',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 30],
            ['relative_nature', '?'],
          ],
        }],
        id: '849',
      },
      {
        name: 'toxtricity',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 30],
            ['relative_nature', '?'],
          ],
        }],
        id: '10184',
      },
    ],
    detail: [],
    id: '848',
  }],
};

const chain457 = {
  chainIndex: 457,
  chain: [{
    name: 'duraludon',
    to: [{
      name: 'archaludon',
      to: [],
      detail: [{
        trigger: 'use-item',
        condition: [['item', '복합금속']],
      }],
      id: '1018',
    }],
    detail: [],
    id: '884',
  }],
};

const chain462 = {
  chainIndex: 462,
  chain: [{
    name: 'kubfu',
    to: [
      {
        name: 'urshifu',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [['item', '악의 족자']],
        }],
        id: '892',
      },
      {
        name: 'urshifu',
        to: [],
        detail: [{
          trigger: 'use-item',
          condition: [['item', '물의 족자']],
        }],
        id: '10191',
      },
    ],
    detail: [],
    id: '891',
  }],
};

const chain473 = {
  chainIndex: 473,
  chain: [{
    name: 'lechonk',
    to: [
      {
        name: 'oinkologne',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 18],
            ['gender', 2],
          ],
        }],
        id: '916',
      },
      {
        name: 'oinkologne',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 18],
            ['gender', 1],
          ],
        }],
        id: '10254',
      },
    ],
    detail: [],
    id: '915',
  }],
};

const chain476 = {
  chainIndex: 476,
  chain: [{
    name: 'pawmi',
    to: [{
      name: 'pawmo',
      to: [{
        name: 'pawmot',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['other', '레츠고 모드에서 1000보 이상 걷고 볼로 돌아 가지 않은 상태에서'],
          ],
        }],
        id: '923',
      }],
      detail: [{
        trigger: 'level-up',
        condition: [['min_level', 18]],
      }],
      id: '922',
    }],
    detail: [],
    id: '921',
  }],
};

const chain477 = {
  chainIndex: 477,
  chain: [{
    name: 'tandemaus',
    to: [
      {
        name: 'maushold',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 25],
            ['other', 'random'],
          ],
        }],
        id: '925',
      },
      {
        name: 'maushold',
        to: [],
        detail: [{
          trigger: 'level-up',
          condition: [
            ['min_level', 25],
            ['other', 'random'],
          ],
        }],
        id: '10257',
      },
    ],
    detail: [],
    id: '924',
  }],
};

const chain487 = {
  chainIndex: 487,
  chain: [{
    name: 'bramblin',
    to: [{
      name: 'brambleghast',
      to: [],
      detail: [{
        trigger: 'level-up',
        condition: [
          ['other', '레츠고 모드에서 1000보 이상 걷고 레벨 업'],
        ],
      }],
      id: '947',
    }],
    detail: [],
    id: '946',
  }],
};

const chain491 = {
  chainIndex: 491,
  chain: [{
    name: 'rellor',
    to: [{
      name: 'rabsca',
      to: [],
      detail: [{
        trigger: 'level-up',
        condition: [
          ['other', '레츠고 모드에서 1000보 이상 걷고 레벨 업'],
        ],
      }],
      id: '954',
    }],
    detail: [],
    id: '953',
  }],
};

const chain496 = {
  chainIndex: 496,
  chain: [{
    name: 'finizen',
    to: [{
      name: 'palafin',
      to: [],
      detail: [{
        trigger: 'level-up',
        condition: [
          ['min_level', 38],
          ['other', '다른 플레이어와 유니온 서클을 플레이하고 있는 상태에서 레벨업'],
        ],
      }],
      id: '964',
    }],
    detail: [],
    id: '963',
  }],
};

const chain520 = {
  chainIndex: 520,
  chain: [{
    name: 'gimmighoul',
    to: [{
      name: 'gholdengo',
      to: [],
      detail: [{
        trigger: 'level-up',
        condition: [
          ['other', '모으령의코인을 999개 획득 후 레벨업'],
        ],
      }],
      id: '1000',
    }],
    detail: [],
    id: '999',
  }],
};

const chain531 = {
  chainIndex: 531,
  chain: [{
    name: 'poltchageist',
    to: [{
      name: 'sinistcha',
      to: [],
      detail: [
        {
          trigger: 'use-item',
          condition: [
            ['item', '걸작찻잔'],
          ],
        },
        {
          trigger: 'use-item',
          condition: [
            ['item', '범작찻잔을'],
          ],
        },
      ],
      id: '1013',
    }],
    detail: [],
    id: '1012',
  }],
};

export default function editEvolutionChains(chains) {
  const editChains = [...chains];
  editChains[6] = chain7;
  editChains[9] = chain10;
  editChains[10] = chain11;
  editChains[14] = chain15;
  editChains[20] = chain21;
  editChains[21] = chain22;
  editChains[23] = chain24;
  editChains[24] = chain25;
  editChains[30] = chain31;
  editChains[31] = chain32;
  editChains[32] = chain33;
  editChains[34] = chain35;
  editChains[37] = chain38;
  editChains[43] = chain44;
  editChains[44] = chain45;
  editChains[45] = chain46;
  editChains[48] = chain49;
  editChains[56] = chain57;
  editChains[62] = chain63;
  editChains[72] = chain73;
  editChains[73] = chain74;
  editChains[74] = chain75;
  editChains[79] = chain80;
  editChains[95] = chain96;
  editChains[105] = chain106;
  editChains[108] = chain109;
  editChains[112] = chain113;
  editChains[133] = chain134;
  editChains[143] = chain144;
  editChains[177] = chain178;
  editChains[249] = chain250;
  editChains[270] = chain271;
  editChains[273] = chain274;
  editChains[278] = chain279;
  editChains[282] = chain283;
  editChains[308] = chain309;
  editChains[310] = chain311;
  editChains[339] = chain340;
  editChains[353] = chain354;
  editChains[357] = chain358;
  editChains[365] = chain366;
  editChains[370] = chain371;
  editChains[371] = chain372;
  editChains[374] = chain375;
  editChains[433] = chain434;
  editChains[437] = chain438;
  editChains[456] = chain457;
  editChains[461] = chain462;
  editChains[475] = chain476;
  editChains[472] = chain473;
  editChains[476] = chain477;
  editChains[486] = chain487;
  editChains[490] = chain491;
  editChains[495] = chain496;
  editChains[519] = chain520;
  editChains[530] = chain531;
  return editChains;
}
