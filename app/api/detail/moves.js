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

const GEN_ALL = [
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

async function fetchMoveMachine(machineUrl) {
  const data = await (await fetch(machineUrl)).json();
  const { id, item } = data;
  const type = item?.name.slice(0, 2);
  return {
    id,
    type,
    name: item?.name || '',
  };
}

function findMoveName(names) {
  const findTargetLanguageName = (targetLan) => names.find(({ language }) => (
    language.name === targetLan))?.name;

  const en = findTargetLanguageName('en');
  return {
    en,
    ko: findTargetLanguageName('ko') || en,
  };
}

async function fetchMoveInfo(moveUrl) {
  const data = await (await fetch(moveUrl)).json();

  const {
    names,
    accuracy,
    type,
    power,
    machines,
    damage_class: damageClass,
  } = data;

  const name = findMoveName(names);

  return {
    accuracy,
    power,
    machines,
    name,
    damage_class: damageClass.name,
    type: type.name,
  };
}

function findVersionMachine(version, machines) {
  return machines.find((machine) => machine.version_group.name === version);
}

async function fetchVersionMachineInfo(version, machines) {
  const versionMachineUrl = findVersionMachine(version, machines)?.machine?.url;

  if (versionMachineUrl) {
    const machineInfo = await fetchMoveMachine(versionMachineUrl);
    return machineInfo;
  }
  return {
    id: 0,
    type: 'tm',
    name: 'tm0',
  };
}

async function processMoveDetails(versionDetail, version, moveUrl) {
  const moveDetails = await Promise.all(versionDetail.map(async (detailInfo) => {
    const {
      level_learned_at: level,
      move_learn_method: { name: method },
    } = detailInfo;

    const { machines, ...moveInfo } = await fetchMoveInfo(moveUrl);

    if (method === 'machine') {
      const machinInfo = await fetchVersionMachineInfo(version, machines);
      return {
        method,
        move: moveInfo,
        machine: machinInfo,
      };
    }
    return {
      move: moveInfo,
      level,
      method,
    };
  }));

  return moveDetails;
}

async function filterVersion(targetVersion, moves) {
  const result = await moves.reduce(async (accPromise, move) => {
    const acc = await accPromise;

    const {
      version_group_details: versionGroupDetails,
      move: moveInfo,
    } = move;

    const targetVersionDetails = versionGroupDetails.filter((detail) => (
      detail.version_group.name === targetVersion
    ));

    if (targetVersionDetails.length > 0) {
      const movesData = await processMoveDetails(targetVersionDetails, targetVersion, moveInfo.url);
      return [...acc, ...movesData];
    }
    return acc;
  }, Promise.resolve([]));

  return result;
}

function filterMethod(moves) {
  return moves.reduce((acc, { method, ...rest }) => {
    acc[method].push(rest);
    return acc;
  }, {
    'level-up': [],
    machine: [],
    tutor: [],
    egg: [],
    back: [],
  });
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
  const genAllMoves = await Promise.all(GEN_ALL.map(async (versions, index) => {
    const genMoves = await Promise.all(versions.map(async (version) => {
      const versionMoves = filterMethod(await filterVersion(version, moves));
      return ({
        version,
        versionMoves,
      });
    }));

    return {
      genMoves,
      gen: index + 1,
    };
  }));

  const filterdNotExistMoves = filterNotExist(genAllMoves);

  return filterdNotExistMoves;
}
