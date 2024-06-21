import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import { GEN_ALL } from '../gen.mjs';
import fetchVersionMachineMove from './machine.mjs';
import updateMoves from './update.mjs';

const MOVE_METHODS = {
  'level-up': 'level-up',
  machine: 'machine',
  tutor: 'tutor',
  egg: 'egg',
  pre: 'pre',
};

const instance = axios.create();
const axiosCache = setupCache(instance);

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
  try {
    const { data } = await axiosCache(url);

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
      name: pickMoveName(names),
    };
  } catch (error) {
    console.error(error);
    return error.message;
  }
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

// find 함수가 문제 => filter로 변경
function filterVersion(targetVersion, moves) {
  // return moves
  //   .reduce((acc, { move, version_group_details: versionGroups }) => {
  //     const targetVersionDetail = versionGroups.find(({ version_group: { name } }) => (
  //       name === targetVersion));

  //     if (targetVersionDetail) {
  //       acc.push({
  //         move,
  //         versionDetail: targetVersionDetail,
  //       });
  //     }
  //     return acc;
  //   }, []);
  return moves
    .reduce((acc, { move, version_group_details: versionGroupDetails }) => {
      const targetVersionDetails = versionGroupDetails.filter(({ version_group: { name } }) => (
        name === targetVersion));

      if (targetVersionDetails.length > 0) {
        const versionDetails = targetVersionDetails.map((versionDetail) => ({
          move,
          versionDetail,
        }));
        return [...acc, ...versionDetails];
      }
      return acc;
    }, []);
}

async function fetchVersionMoveDetails(versionMoves) {
  try {
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

        if (method === MOVE_METHODS.machine) {
          const machineInfo = await fetchVersionMachineMove(version, machines);
          moveDetail.machine = machineInfo;
        } else if (method === MOVE_METHODS['level-up']) {
          moveDetail.level = level;
        }

        return moveDetail;
      }),
    );
  } catch (error) {
    console.error(error);
    return error.message;
  }
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

async function fetchAllGenMoves(moves) {
  try {
    return Promise.all(
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
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export default async function fetchMoves(moves) {
  try {
    const allGenMoves = await fetchAllGenMoves(moves);
    const filterdMoves = filterGenNotExist(allGenMoves);
    return updateMoves(filterdMoves);
  } catch (error) {
    console.error(error);
    return error.message;
  }
}
