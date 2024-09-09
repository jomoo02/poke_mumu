import React from 'react';
import { useLanguage } from '@/app/language-provider';
// import MethodMoves from './method-moves-v2';
import MethodMoves from '@/app/detail/[pokeKey]/modules/moves/components/method-moves';
import {
  checkTargetMovesEmpty,
  groupMachineMovesByType,
} from './utils/target-moves';
import { getMethods } from './utils/method-moves';

function NotExistInVersion() {
  const { language } = useLanguage();

  const localeText = {
    en: 'A version where the Pokémon does not exist',
    ko: '해당 포켓몬이 존재하지 않는 버전',
  };

  const text = localeText[language] || localeText.ko;

  return (
    <div className="flex justify-center min-h-44 md:min-h-96 items-center py-3 px-2 font-semibold text-xl">
      {text}
    </div>
  );
}

function Moves({ method, moves }) {
  if (!moves || moves.length === 0) {
    return null;
  }

  return (
    <MethodMoves
      method={method}
      moves={moves}
      className="overflow-x-hidden py-0.5 my-4 sm:my-3 lg:my-4"
    />
  )
}

// function Moves({ method, moves }) {
//   if (!moves || moves.length === 0) {
//     return null;
//   }

//   return (
//     <MethodMoves method={method} className="overflow-x-hidden py-0.5 my-4 sm:my-3 lg:my-4">
//       <div className="px-1 md:px-4">
//         <MethodMoves.Title />
//       </div>
//       <div className="flex px-1 md:px-4 overflow-x-auto">
//         <MethodMoves.MoveTable moves={moves} />
//       </div>

//     </MethodMoves>
//   );
// }

function MachineMoves({ machineMoves }) {
  if (!machineMoves || machineMoves.length === 0) {
    return null;
  }

  const machineMovesGroup = groupMachineMovesByType(machineMoves);

  return (
    <div className="grid w-full xl:w-1/2 xl:justify-end">
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
    return <NotExistInVersion />;
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
    <div className="flex flex-wrap xl:py-3">
      <div className="grid w-full xl:w-1/2">
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
