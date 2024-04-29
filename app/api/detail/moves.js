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

async function fetchMoveInfo(move) {
  const data = await (await fetch(move.url)).json();
  const {
    names,
    accuracy,
    type,
    power,
    damage_class: damageClass,
  } = data;

  const findLanguageName = (targetLan) => names.find(({ language }) => (
    language.name === targetLan))?.name;

  const nameEn = findLanguageName('en');
  const nameKo = findLanguageName('ko') || nameEn;

  return {
    accuracy,
    power,
    damage_class: damageClass.name,
    type: type.name,
    name: {
      ko: nameKo,
      en: nameEn,
    },
  };
}

async function filterVersion(version, moves) {
  const results = await moves.reduce(async (accPromise, move) => {
    const acc = await accPromise;
    const versionDetail = move.version_group_details.filter((detail) => (
      detail.version_group.name === version
    ));

    if (versionDetail.length > 0) {
      const movesData = await Promise.all(versionDetail.map(async (detailInfo) => {
        const level = detailInfo.level_learned_at;
        const method = detailInfo.move_learn_method.name;
        const moveInfo = await fetchMoveInfo(move.move);
        return ({
          move: moveInfo,
          level,
          method,
        });
      }));

      return [...acc, ...movesData];
    }
    return acc;
  }, Promise.resolve([]));

  return results.sort((a, b) => a.level - b.level);
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

export default async function filterMoves(moves) {
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

  const genAllMoves = await Promise.all(genAll.map(async (versions, index) => {
    const gen = index + 1;
    const genMoves = await Promise.all(versions.map(async (version) => {
      const versionMoves = filterMethod(await filterVersion(version, moves));
      return ({
        version,
        versionMoves,
      });
    }));

    return ({
      gen,
      genMoves,
    });
  }));

  const filterdNotExistMoves = filterNotExist(genAllMoves);

  return filterdNotExistMoves;
}
