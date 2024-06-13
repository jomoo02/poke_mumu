import React from 'react';
// import LevelUpMethodMoves from './method/level-up';
// import MachineMethodMoves from './method/machine';
// import PreEvolutionMethodMoves from './method/pre-evolution';
// import TutorMethodMoves from './method/tutor';
// import EggMethodMoves from './method/egg';
import LevelUpMethodMoves from './v2/method/level-up';
import EggMethodMoves from './v2/method/egg';
import PreEvolutionMethodMoves from './v2/method/pre-evolution';
import TutorMethodMoves from './v2/method/tutor';
import MachineMethodMoves from './v2/method/machine';

function Container({ version, children }) {
  return (
    <div className="my-4">
      <h4 className="font-medium">
        {`${version} 버전`}
      </h4>
      {children}
    </div>
  );
}

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
      <Container version={version}>
        <div>none</div>
      </Container>
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
    <Container version={version}>
      <div className="grid xl:grid-cols-2 gap-y-10 gap-x-2">
        <div className="grid sm:flex sm:flex-col gap-y-10">
          <LevelUpMethodMoves moves={levelUp} />
          <EggMethodMoves moves={egg} />
          <TutorMethodMoves moves={tutor} />
          <PreEvolutionMethodMoves moves={pre} />
        </div>

        <div className="grid gap-y-10">
          {machineTypesMoves.map(({ type, moves }) => (
            <MachineMethodMoves key={type} moves={moves} machineType={type} />))}
        </div>
      </div>
    </Container>
  );
}
