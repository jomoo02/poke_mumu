import React from 'react';
import LevelUpMethodMoves from './method/level-up';
import EggMethodMoves from './method/egg';
import PreEvolutionMethodMoves from './method/pre-evolution';
import TutorMethodMoves from './method/tutor';
import MachineMethodMoves from './method/machine';
import RemiderMethodMoves from './method/reminder';

function filterMachineTypeMove(machineMoves) {
  const machineTypes = ['tm', 'hm', 'tr'];

  const filterMovesMachinType = (type) => (
    machineMoves
      .filter(({ machine: machineMove }) => machineMove.type === type)
      .sort((a, b) => a.machine.number - b.machine.number));

  const machineTypesMoves = machineTypes
    .map((type) => ({ type, moves: filterMovesMachinType(type) }))
    .filter(({ moves }) => moves);

  return machineTypesMoves;
}

export default function VersionMoves({ versionMoves }) {
  const checkExistMoves = Object.values(versionMoves).filter((moves) => moves.length > 0);

  if (checkExistMoves.length === 0) {
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

  const machineTypesMoves = filterMachineTypeMove(machine);

  return (
    <div className="flex flex-wrap gap-y-10 py-3 gap-x-10 justify-evenly">
      <div className="flex flex-col gap-y-10 overflow-auto">
        {levelUp.length > 0 && <LevelUpMethodMoves moves={levelUp} />}
        {egg.length > 0 && <EggMethodMoves moves={egg} />}
        {tutor.length > 0 && <TutorMethodMoves moves={tutor} />}
        {pre.length > 0 && <PreEvolutionMethodMoves moves={pre} />}
        {reminder && reminder.length > 0 && <RemiderMethodMoves moves={reminder} />}
      </div>
      <div className="flex flex-col gap-y-10 overflow-auto">
        {machineTypesMoves.map(({ type, moves }) => {
          if (moves.length > 0) {
            return <MachineMethodMoves key={type} moves={moves} machineType={type} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
