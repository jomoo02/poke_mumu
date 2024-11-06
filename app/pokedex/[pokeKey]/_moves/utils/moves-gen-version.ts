import type {
  VersionMove,
  MachineMove,
  MachineType,
  Move,
} from '@/app/models/detail.type';
import { Method } from '../data/method';

function checkVersionMoveEmpty(versionMove: VersionMove) {
  const filterdMoves = Object
    .values(versionMove)
    .filter((moves) => moves.length > 0);

  return filterdMoves.length === 0;
}

function groupMachineMovesByMachineType(machineMoves: MachineMove[]) {
  const machineTypes: MachineType[] = ['hm', 'tm', 'tr'];

  const filterMoveByType = (machineType: MachineType) => (
    machineMoves
      .filter(({ machine }) => machine.type === machineType)
      .sort((a, b) => a.machine.number - b.machine.number)
  );

  return machineTypes
    .map((machineType) => (
      {
        method: machineType,
        moves: filterMoveByType(machineType),
      }
    ))
    .filter(({ moves }) => moves.length > 0);
}

function categorizeVersionMove(versionMove: VersionMove) {
  const {
    machine,
    egg,
    pre,
    tutor,
    reminder,
    'level-up': level,
  } = versionMove;

  const normalMoves: { method: Method, moves: Move[] }[] = [
    {
      method: 'level',
      moves: level,
    },
    {
      method: 'egg',
      moves: egg,
    },
    {
      method: 'tutor',
      moves: tutor,
    },
    {
      method: 'pre',
      moves: pre,
    },
    {
      method: 'reminder',
      moves: reminder,
    },
  ];

  return {
    normalMoves: normalMoves.filter(({ moves }) => moves),
    machineMoves: groupMachineMovesByMachineType(machine),
  };
}

export {
  checkVersionMoveEmpty,
  categorizeVersionMove,
};
