import React from 'react';
import Move from './move';
import MoveV2 from './move-v2';

const GRID_COLS_MAP = {
  levelUp: 'grid-cols-7',
  machine: 'grid-cols-7',
  pre: 'grid-cols-7',
  tutor: 'grid-cols-6',
  egg: 'grid-cols-6',
};

// function Header({ gridCols, children }) {
//   return (
//     <div className={`grid gap-x-1.5 md:gap-x-2 ${gridCols} border-b text-xs md:text-base items-center h-9`}>
//       {children}
//       <div className="col-span-2">이름</div>
//       <div className="text-center">타입</div>
//       <div className="text-center">분류</div>
//       <div className="text-center">위력</div>
//       <div className="text-center">명중률</div>
//     </div>
//   );
// }

function Header({ children }) {
  return (
    <div className="flex gap-x-1.5 md:gap-x-2 border-b text-sm md:text-base items-center h-9">
      {children}
      <div className="w-44">이름</div>
      <div className="text-center w-[5.5rem]">타입</div>
      <div className="text-center w-[5.5rem]">분류</div>
      <div className="text-center w-[4.5rem]">위력</div>
      <div className="text-center w-[4.5rem]">명중률</div>
    </div>
  );
}

function TitleHeader({ method, header }) {
  const HEADER_COL_SPAN_MAP = {
    pre: 'col-span-1 px-2',
    levelUp: 'col-span-1',
    machine: 'col-span-1',
  };

  return (
    <div className={`flex items-center ${HEADER_COL_SPAN_MAP[method]}`}>
      {header}
    </div>
  );
}

export default function MethodMoves({
  title, method, moves, headerContent, MoveContent,
}) {
  if (moves.length === 0) {
    return null;
  }

  const getKey = (moveData) => {
    if (method === 'levelUp') {
      return `${moveData.move.name.en}-${moveData.level}`;
    }
    return moveData.move.name.en;
  };

  return (
    <div>
      <h4 className="text-lg md:text-xl font-medium">
        {title}
      </h4>
      <div className="grid gap-y-0.5">
        <Header gridCols={GRID_COLS_MAP[method]}>
          {headerContent && (
            <TitleHeader header={headerContent} method={method} />
          )}
        </Header>
        {moves.map((moveData) => (
          <MoveV2
            key={getKey(moveData)}
            move={moveData.move}
            gridCols={GRID_COLS_MAP[method]}
          >
            {MoveContent && <MoveContent moveData={moveData} />}
          </MoveV2>
        ))}
      </div>
    </div>
  );
}
