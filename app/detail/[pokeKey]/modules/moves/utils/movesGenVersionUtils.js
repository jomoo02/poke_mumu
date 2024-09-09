import { getMethods } from './methodUtils';

export function checkVersionMovesEmpty(versionMoves) {
  const filterdMoves = Object
    .values(versionMoves)
    .filter((moves) => moves.length > 0);

  return filterdMoves.length === 0;
}

function groupMachineMovesByType(machineMoves) {
  const {
    tm,
    tr,
    hm,
  } = getMethods();

  const types = [tm, tr, hm];

  const targetMoves = [...machineMoves];

  const filterMoveBytype = (type) => (
    targetMoves
      .filter(({ machine }) => machine.type === type)
      .sort((a, b) => a.machine.number - b.machine.number)
  );

  return (
    types
      .map((type) => (
        {
          method: type,
          moves: filterMoveBytype(type),
        }
      ))
      .filter(({ moves }) => moves.length > 0)
  );
}

export function normalizeVersionMoves(versionMoves) {
  const {
    level,
    pre,
    egg,
    tutor,
    reminder,
  } = getMethods();

  const {
    machine: machineMoves,
    egg: eggMoves,
    pre: preMoves,
    tutor: tutorMoves,
    reminder: reminderMoves,
    'level-up': levelMoves,
  } = versionMoves;

  const normalMoves = [
    {
      method: level,
      moves: levelMoves,
    },
    {
      method: egg,
      moves: eggMoves,
    },
    {
      method: tutor,
      moves: tutorMoves,
    },
    {
      method: pre,
      moves: preMoves,
    },
    {
      method: reminder,
      moves: reminderMoves,
    },
  ];

  return {
    normalMoves: normalMoves.filter(({ moves }) => moves),
    machineMoves: groupMachineMovesByType(machineMoves),
  };
}
