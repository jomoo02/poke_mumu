import React from 'react';
import Image from 'next/image';
import Header from './header';
import Move from './move';
import LevelUpMethodMoves from './method/level-up';
import MachineMethodMoves from './method/machine';

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


// function MachineMethodMoves({ moves }) {
//   if (moves.length === 0) {
//     return null;
//   }

//   const methodText = '기술머신으로 익히는 기술';
//   const machineTypes = ['tm', 'hm', 'tr'];

//   const filterMovesMachineType = (type) => moves
//     .filter(({ machine }) => machine.type === type)
//     .sort((a, b) => {
//       const getNumber = (str) => parseInt(str.match(/\d+/), 10) || 0;
//       return getNumber(a.machine.name) - getNumber(b.machine.name);
//     });

//   const machineTypesMoves = machineTypes.map((type) => filterMovesMachineType(type));

//   return (
//     <div>
//       <h4 className="text-lg font-medium md:text-xl">{methodText}</h4>
//       <div className="grid gap-y-6">
//         {machineTypes.map((machineType, index) => (
//           <Fragment key={machineType}>
//             {machineTypesMoves[index].length > 0 && (
//             <div className="grid gap-y-0.5">
//               <div className="text-lg">{machineType}</div>
//               <Header>
//                 <div className="flex items-center">
//                   {machineTypes[index]}
//                 </div>
//               </Header>
//               {machineTypesMoves[index].map(({ move, machine }) => (
//                 <Move
//                   key={move.name.en}
//                   move={move}
//                 >
//                   <div className="text-xs flex items-center md:text-base">
//                     {machine.name.slice(2)}
//                   </div>
//                 </Move>
//               ))}
//             </div>
//             )}
//           </Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }

function EggMethodMoves({ moves }) {
  if (moves.length === 0) {
    return null;
  }

  const methodText = '교배를 통해 유전 받을 수 있는 기술';
  const sortedMoves = [...moves].sort((a, b) => a.move.type.localeCompare(b.move.type));

  return (
    <div>
      <h4 className="text-lg font-medium md:text-xl">{methodText}</h4>
      <div className="grid gap-y-0.5">
        <Header />
        {sortedMoves.map(({ move }) => (
          <Move
            key={move.name.en}
            move={move}
          />
        ))}
      </div>
    </div>
  );
}

function TutorMethodMoves({ moves }) {
  if (moves.length === 0) {
    return null;
  }

  const methodText = 'NPC로부터 배울 수 있는 기술';
  const sortedMoves = [...moves].sort((a, b) => a.move.type.localeCompare(b.move.type));

  return (
    <div>
      <h4 className="text-lg font-medium md:text-xl">{methodText}</h4>
      <div className="grid gap-y-0.5">
        <Header />
        {sortedMoves.map(({ move }) => (
          <Move
            key={move.name.en}
            move={move}
          />
        ))}
      </div>
    </div>
  );
}

function PreEvolutionMethodMoves({ moves }) {
  if (!moves || moves.length === 0) {
    return null;
  }

  const sprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons';
  const methodText = '이전 진화에서만 얻을 수 있는 기술';

  const sortedMoves = [...moves].sort((a, b) => a.preIds.length - b.preIds.length);

  return (
    <div>
      <h4 className="text-lg font-medium md:text-xl">{methodText}</h4>
      <div className="grid gap-y-0.5">
        <Header>
          <div className="flex items-center">back</div>
        </Header>
        {sortedMoves.map(({ move, preIds }) => (
          <div key={move.name.en} className="border-b">
            <Move
              key={move.name.en}
              move={move}
            >
              <div className="flex gap-x-2 col-span-2">
                {preIds.map((id) => (
                  <Image
                    key={id}
                    src={`${sprityUrl}/${id}.png`}
                    alt={id}
                    width={35}
                    height={25}
                    style={{ width: 35, height: 25 }}
                  />
                ))}
              </div>
            </Move>
          </div>
        ))}
      </div>
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
      <div className="grid gap-y-9">
        <LevelUpMethodMoves moves={levelUp} />
        <MachineMethodMoves moves={machine} />
        <EggMethodMoves moves={egg} />
        <PreEvolutionMethodMoves moves={pre} />
        <TutorMethodMoves moves={tutor} />
      </div>
    </Container>
  );
}
