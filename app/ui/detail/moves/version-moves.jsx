import React from 'react';
import LevelUpMethodMoves from './method/level-up';
import MachineMethodMoves from './method/machine';
import PreEvolutionMethodMoves from './method/pre-evolution';
import TutorMethodMoves from './method/tutor';
import EggMethodMoves from './method/egg';

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

  return (
    <Container version={version}>
      <div className="grid gap-y-9 2xl:grid-cols-2 gap-x-20">
        <LevelUpMethodMoves moves={levelUp} />
        <MachineMethodMoves moves={machine} />
        <EggMethodMoves moves={egg} />
        <PreEvolutionMethodMoves moves={pre} />
        <TutorMethodMoves moves={tutor} />
      </div>
    </Container>
  );
}
