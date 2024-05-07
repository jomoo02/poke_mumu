import { GEN_ALL } from '../gen.mjs';
import fetchVersionMachineMove from './machine.mjs';

const MOVE_METHODS = {
  'level-up': 'level-up',
  machine: 'machine',
  tutor: 'tutor',
  egg: 'egg',
  back: 'back',
};

function pickMoveName(names) {
  const findLanguageName = (target) => (
    names.find(({ language }) => language.name === target)
  )?.name;

  const en = findLanguageName('en') || '';

  return {
    en,
    ko: findLanguageName('ko') || en,
  };
}

async function fetchMove(url) {
  const data = await (await fetch(url)).json();

  const {
    names,
    accuracy,
    type,
    power,
    machines,
    damage_class: damageClass,
  } = data;

  return {
    accuracy,
    power,
    machines,
    damage_class: damageClass.name,
    type: type.name,
    names: pickMoveName(names),
  };
}

function groupByMethod(moves) {
  const initialObj = Object.keys(MOVE_METHODS).reduce((acc, cur) => {
    acc[cur] = [];
    return acc;
  }, {});

  return moves.reduce((acc, { method, ...rest }) => {
    if (acc[method]) {
      acc[method].push(rest);
    } else if (method.includes('egg')) {
      acc.egg.push(rest);
    }

    return acc;
  }, initialObj);
}

function filterVersion(targetVersion, moves) {
  return moves
    .reduce((acc, { move, version_group_details: versionGroups }) => {
      const targetVersionDetail = versionGroups.find(({ verion_group: version }) => (
        version === targetVersion));

      if (targetVersionDetail) {
        acc.push({
          move,
          versionDetail: targetVersionDetail,
        });
      }
      return acc;
    }, []);
}

async function fetchVersionMoveDetails(versionMoves) {
  return Promise.all(
    versionMoves.map(async (move) => {
      const { versionDetail, move: { url: moveUrl } } = move;
      const {
        level_learned_at: level,
        move_learn_method: { name: method },
        version_group: { name: version },
      } = versionDetail;

      const { machines, ...moveInfo } = await fetchMove(moveUrl);

      const moveDetail = {
        method,
        move: moveInfo,
      };

      if (method === 'machine') {
        const machineInfo = await fetchVersionMachineMove(version, machines);
        moveDetail.machine = machineInfo;
      } else if (method === 'level-up') {
        moveDetail.level = level;
      }

      return moveDetail;
    }),
  );
}

function filterGenNotExist(moves) {
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

export default async function fetchMoves(moves) {
  const allGenMoves = await Promise.all(
    GEN_ALL.map(async (versions, index) => {
      const gen = index + 1;
      const genMoves = await Promise.all(versions.map(async (version) => {
        const targetVersionMoves = filterVersion(version, moves);
        const moveDetails = await fetchVersionMoveDetails(targetVersionMoves);

        return {
          version,
          versionMoves: groupByMethod(moveDetails),
        };
      }));

      return {
        gen,
        genMoves,
      };
    }),
  );

  const filterdMoves = filterGenNotExist(allGenMoves);
  return filterdMoves;
}
