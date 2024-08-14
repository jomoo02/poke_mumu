import React from 'react';
import MethodMoves from './method-moves';
import {
  checkTargetMovesEmpty,
  groupMachineMovesByType,
} from './utils/target-moves';
import { getMethods } from './utils/method-moves';

function Moves({ method, moves }) {
  if (!moves || moves.length === 0) {
    return null;
  }

  return (
    <MethodMoves method={method} className="overflow-hidden">
      <MethodMoves.Title />
      <MethodMoves.MoveTable moves={moves} />
    </MethodMoves>
  );
}

function MachineMoves({ machineMoves }) {
  if (!machineMoves || machineMoves.length === 0) {
    return null;
  }

  const machineMovesGroup = groupMachineMovesByType(machineMoves);

  return (
    <div className="grid justify-center">
      {machineMovesGroup.map(({ type, moves }) => (
        <Moves
          key={type}
          method={type}
          moves={moves}
        />
      ))}
    </div>
  );
}

export default function TargetMoves({ versionMoves }) {
  if (checkTargetMovesEmpty(versionMoves)) {
    return <div>해당 포켓몬이 존재하지 않는 버전</div>;
  }

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

  return (
    <div className="grid xl:grid-cols-2">
      <div className="grid justify-center overflow-hidden">
        <Moves method={level} moves={levelMoves} />
        <Moves method={egg} moves={eggMoves} />
        <Moves method={tutor} moves={tutorMoves} />
        <Moves method={pre} moves={preMoves} />
        <Moves method={reminder} moves={reminderMoves} />
      </div>
      <MachineMoves machineMoves={machineMoves} />
    </div>
  );
}
