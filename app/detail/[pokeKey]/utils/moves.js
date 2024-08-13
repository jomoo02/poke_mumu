import { versionGroupLanguage } from '@/app/translations/version';

export function getLocaleVersion(version, locale) {
  return versionGroupLanguage[locale][version];
}

export function checkTargetMovesEmpty(targetMoves) {
  const filterdMoves = Object.values(targetMoves).filter((moves) => moves.length > 0);

  return filterdMoves.length === 0;
}

function filterMachineMovesByMachineType(machineMoves, machineType) {
  return (
    machineMoves
      .filter(({ machine: { type } }) => type === machineType)
      .sort((a, b) => a.machine.number - b.machine.number)
  );
}

export function groupMovesByMachineType(machineMoves) {
  const machineTypes = ['tm', 'hm', 'tr'];

  return (
    machineTypes
      .map((type) => (
        { type: type, moves: filterMachineMovesByMachineType(machineMoves, type) }))
      .filter(({ moves }) => moves.length > 0)
  );
}

function setMethodMovesKey(moves, method) {
  if (!moves || moves.length === 0) {
    return [];
  }

  if (method === 'levelUp') {
    return moves.map((move) => ({ ...move, key: `${move.level}-${move.move.name.en}` }));
  }
  return moves.map((move) => ({ ...move, key: move.move.name.en }));
}

export function setMovesKey(moves) {
  return Object.fromEntries(
    Object.entries(moves).map(([key, value]) => {
      if (key === 'level-up') {
        return ['levelUpMoves', setMethodMovesKey(value, 'levelUp')];
      }
      return [`${key}Moves`, setMethodMovesKey(value, key)];
    }),
  );
}

export function getMethodMovesTitle(method) {
  const titleObjMap = {
    level: {
      en: 'moves learnt by level up',
      ko: '레벌 업으로 익히는 기술',
    },
    egg: {
      en: 'egg moves',
      ko: '교배를 통해 유전 받을 수 있는 기술',
    },
    tutor: {
      en: 'move Tutor moves',
      ko: 'NPC로부터 배울 수 있는 기술',
    },
    reminder: {
      en: 'moves learnt by reminder',
      ko: '떠올리기로 익히는 기술',
    },
    pre: {
      en: 'pre-evolution moves',
      ko: '이전 진화에서만 얻을 수 있는 기술',
    },
  };
}

export function getMachineMethodMovesTitle(machineType) {
  const getTitleObj = (type) => ({
    en: `moves learnt by ${type}`,
    ko: `기술머신 ${type} 으로 익히는 기술`,
  });

  return getTitleObj[machineType];
}
