const GEN1 = ['red-blue', 'yellow'];
const GEN2 = ['gold-silver', 'crystal'];
const GEN3 = [
  'ruby-sapphire',
  'emerald',
  'firered-leafgreen',
];
const GEN4 = [
  'diamond-pearl',
  'platinum',
  'heartgold-soulsilver',
];
const GEN5 = [
  'black-white',
  'black-2-white-2',
];
const GEN6 = [
  'x-y',
  'omega-ruby-alpha-sapphire',
];
const GEN7 = [
  'sun-moon',
  'ultra-sun-ultra-moon',
];
const GEN8 = [
  'sword-shield',
  'brilliant-diamond-and-shining-pearl',
  'lets-go-pikachu-lets-go-eevee',
];
const GEN9 = ['scarlet-violet'];

function filterVersion(version, moves) {
  return moves.reduce((acc, move) => {
    const versionDetail = move.version_group_details.filter((detail) => (
      detail.version_group.name === version
    ));

    if (versionDetail.length > 0) {
      const movesData = versionDetail.map((detailInfo) => {
        const level = detailInfo.level_learned_at;
        const method = detailInfo.move_learn_method.name;
        return ({
          move: move.move,
          level,
          method,
        });
      });

      return [
        ...acc,
        ...movesData,
      ];
    }
    return acc;
  }, []).sort((a, b) => a.level - b.level);
}

function filterMethod(moves) {
  const methods = {
    'level-up': [],
    machine: [],
    tutor: [],
    egg: [],
  };

  moves.forEach((move) => {
    const { method } = move;
    methods[method].push(move);
  });

  return methods;
}

function filterNotExist(moves) {
  return moves.filter(({ genMoves }) => {
    const filterdGenMoves = genMoves.filter(({ versionMoves }) => (
      Object.keys(versionMoves).some((method) => versionMoves[method].length > 0)
    ));

    if (filterdGenMoves.length > 0) {
      return true;
    }
    return false;
  });
}

export default function filterMoves(moves) {
  const genAll = [
    GEN1,
    GEN2,
    GEN3,
    GEN4,
    GEN5,
    GEN6,
    GEN7,
    GEN8,
    GEN9,
  ];

  const genAllMoves = genAll.map((versions, index) => {
    const gen = index + 1;
    const genMoves = versions.map((version) => {
      const versionMoves = filterMethod(filterVersion(version, moves));
      return ({
        version,
        versionMoves,
      });
    });
    return ({
      gen,
      genMoves,
    });
  });

  return filterNotExist(genAllMoves);
}
