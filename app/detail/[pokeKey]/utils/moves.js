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
      .map((type) => ({ type, moves: filterMachineMovesByMachineType(machineMoves, type) }))
      .filter(({ moves }) => moves.length > 0)
  );
}
