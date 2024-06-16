import React from 'react';
import LevelUpMethodMoves from './v2/method/level-up';
import EggMethodMoves from './v2/method/egg';
import PreEvolutionMethodMoves from './v2/method/pre-evolution';
import TutorMethodMoves from './v2/method/tutor';
import MachineMethodMoves from './v2/method/machine';

export default function VersionMoves({ version, versionMoves }) {
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
      .sort((a, b) => {
        const getNumber = (str) => parseInt(str.match(/\d+/), 10) || 0;
        return getNumber(a.machine.name) - getNumber(b.machine.name);
      }));

  const machineTypesMoves = machineTypes
    .map((type) => ({ type, moves: filterMovesMachinType(type) }))
    .filter(({ moves }) => moves);

  return (
    <div className="grid xl:grid-cols-2 gap-y-10 gap-x-20 py-4">
      {/* <div className="grid sm:flex sm:flex-col gap-y-10"> */}
      <div className="grid gap-y-10 justify-evenly">
        {levelUp.length > 0 && <LevelUpMethodMoves moves={levelUp} />}
        {egg.length > 0 && <EggMethodMoves moves={egg} />}
        {tutor.length > 0 && <TutorMethodMoves moves={tutor} />}
        {pre.length > 0 && <PreEvolutionMethodMoves moves={pre} />}
      </div>

      <div className="grid gap-y-10 justify-evenly">
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
