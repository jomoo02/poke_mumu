import React from 'react';
import {
  checkTargetMovesEmpty,
  groupMovesByMachineType,
  setMovesKey,
  getMethodMovesTitle,
  getMachineMethodMovesTitle,
} from '../../utils/moves';
import MethodMovesTable from './method-moves-table';
import {
  renderMachineMoveFirstColumn,
  renderLevelMoveFirstColumn,
  renderPreMoveFirstColumn,
} from './target-moves.utils';

function MethodMoves({
  moves,
  titleObj,
  renderMoveFirstColumn,
  firstColumnInfo,
}) {
  if (!moves || moves.length === 0) {
    return null;
  }

  return (
    <MethodMovesTable
      moves={moves}
      titleObj={titleObj}
      renderMoveFirstColumn={renderMoveFirstColumn}
      firstColumnInfo={firstColumnInfo}
    />
  );
}

function MachineMoves({ machineMoves }) {
  if (!machineMoves || machineMoves.length === 0) {
    return null;
  }

  const machineTypesMoves = groupMovesByMachineType(machineMoves);

  return (
    <div className="flex flex-col gap-y-10 overflow-auto">
      {machineTypesMoves.map(({ type, moves }) => (
        <MethodMoves
          key={type}
          moves={moves}
          titleObj={getMachineMethodMovesTitle(type)}
          renderMoveFirstColumn={renderMachineMoveFirstColumn}
          firstColumnInfo={{
            key: 'machine',
            content: `${type}`,
            className: 'w-14',
          }}
        />
      ))}
    </div>
  );
}

export default function TargetMoves({ versionMoves }) {
  const isMovesEmpty = checkTargetMovesEmpty(versionMoves);

  if (isMovesEmpty) {
    return <div>none</div>;
  }

  const {
    machineMoves,
    eggMoves,
    preMoves,
    tutorMoves,
    reminderMoves,
    levelUpMoves,
  } = setMovesKey(versionMoves);

  return (
    <div className="flex flex-wrap gap-y-10 py-3 gap-x-10 justify-evenly">
      <div className="flex flex-col gap-y-10 overflow-auto">
        <MethodMoves
          moves={levelUpMoves}
          renderMoveFirstColumn={renderLevelMoveFirstColumn}
          firstColumnInfo={{
            key: 'level',
            content: 'lv.',
            className: 'w-14',
          }}
        />
        <MethodMoves moves={eggMoves} />
        <MethodMoves moves={tutorMoves} />
        <MethodMoves
          moves={preMoves}
          renderMoveFirstColumn={renderPreMoveFirstColumn}
          firstColumnInfo={{
            key: 'pre',
            content: 'poke',
            className: 'w-[5.5rem]',
          }}
        />
        <MethodMoves moves={reminderMoves} />
      </div>
      <MachineMoves machineMoves={machineMoves} />
    </div>
  );
}
