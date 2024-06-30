import React from 'react';
import LevelUpMethodMoves from './v2/method/level-up';
import EggMethodMoves from './v2/method/egg';
import PreEvolutionMethodMoves from './v2/method/pre-evolution';
import TutorMethodMoves from './v2/method/tutor';
import MachineMethodMoves from './v2/method/machine';

export default function VersionMoves({ versionMoves }) {
  const {
    machine,
    egg,
    pre,
    tutor,
    'level-up': levelUp,
  } = versionMoves;

  if ([...machine, ...egg, ...tutor, ...pre, ...levelUp].length === 0) {
    return (
      <div>none</div>
    );
  }

  const machineTypes = ['tm', 'hm', 'tr'];

  const filterMovesMachinType = (type) => (
    machine
      .filter(({ machine: machineMove }) => machineMove.type === type)
      .sort((a, b) => a.machine.number - b.machine.number));
      // .sort((a, b) => {
      //   const getNumber = (str) => parseInt(str.match(/\d+/), 10) || 0;
      //   return getNumber(a.machine.name) - getNumber(b.machine.name);
      // }));

  const machineTypesMoves = machineTypes
    .map((type) => ({ type, moves: filterMovesMachinType(type) }))
    .filter(({ moves }) => moves);

  return (
    <div className="flex flex-wrap gap-y-10 py-3 gap-x-10 justify-between">
      <div className="flex flex-col gap-y-10 overflow-auto">
        {levelUp.length > 0 && <LevelUpMethodMoves moves={levelUp} />}
        {egg.length > 0 && <EggMethodMoves moves={egg} />}
        {tutor.length > 0 && <TutorMethodMoves moves={tutor} />}
        {pre.length > 0 && <PreEvolutionMethodMoves moves={pre} />}
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
