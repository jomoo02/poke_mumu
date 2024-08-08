import React from 'react';
import {
  checkTargetMovesEmpty,
  groupMovesByMachineType,
} from '../../utils/moves';
import MethodMoves from './method-moves';

export default function TargetMoves({ versionMoves }) {
  const isMovesEmpty = checkTargetMovesEmpty(versionMoves);

  if (isMovesEmpty) {
    return <div>none</div>;
  }

  const {
    machine,
    egg,
    pre,
    tutor,
    reminder,
    'level-up': levelUp,
  } = versionMoves;

  const machineTypesMoves = groupMovesByMachineType(machine);

  return (
    <div className="flex flex-wrap gap-y-10 py-3 gap-x-10 justify-evenly">
      <div className="flex flex-col gap-y-10 overflow-auto">
        {levelUp && levelUp.length > 0 && <MethodMoves moves={levelUp} initialSortKey="level" />}
        {egg.length > 0 && <MethodMoves moves={egg} initialSortKey="move" />}
        {tutor.length > 0 && <MethodMoves moves={tutor} initialSortKey="move" />}
        {pre.length > 0 && <MethodMoves moves={pre} initialSortKey="preIds" />}
        {reminder && reminder.length > 0 && <MethodMoves moves={reminder} initialSortKey="move" />}
      </div>
      <div className="flex flex-col gap-y-10 overflow-auto">
        {machineTypesMoves.map(({ type, moves }) => {
          if (moves.length > 0) {
            return <MethodMoves key={type} moves={moves} machineType={type} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
