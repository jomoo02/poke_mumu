import React from 'react';
import {
  checkTargetMovesEmpty,
  groupMovesByMachineType,
  setMovesKey,
  getMachineMethodMovesTitle,
} from '../../utils/moves';
// import MethodMovesTable from './method-moves-table';
import {
  renderMachineMoveFirstColumn,
  renderLevelMoveFirstColumn,
  renderPreMoveFirstColumn,
  getTableHeadFirstItem,
  renderAccuracy,
  renderDamageClass,
  renderName,
  renderPower,
  renderType,
} from './target-moves.utils';
import useTableTitle from './hooks/useTableTitle';
import MethodMove from './method-moves';
import MethodMoves from '../moves3/method-moves'

function MethodMoves2({
  moves,
  method,
  renderMoveFirstColumn,
}) {
  const { title } = useTableTitle(method);

  if (!moves || moves.length === 0) {
    return null;
  }

  const firstHeadColumnInfo = getTableHeadFirstItem(method);

  const renderFn = {
    name: renderName,
    power: renderPower,
    type: renderType,
    accuracy: renderAccuracy,
    damageClass: renderDamageClass,
    machine: renderMachineMoveFirstColumn,
    level: renderLevelMoveFirstColumn,
    pre: renderPreMoveFirstColumn,
  };

  return (
    <div className="overflow-auto">
      <MethodMoves method={method}>
        <MethodMoves.Title />
        <MethodMoves.MoveTable moves={moves} />
      </MethodMoves>
      {/* <MethodMove
        moves={moves}
        renderMoveFirstColumn={renderMoveFirstColumn}
        firstColumnInfo={firstHeadColumnInfo}
        renderFn={renderFn}
      /> */}
    </div>

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
        <MethodMoves2
          key={type}
          moves={moves}
          renderMoveFirstColumn={renderMachineMoveFirstColumn}
          method={type}
          // method="machine"
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
        <MethodMoves2
          moves={levelUpMoves}
          renderMoveFirstColumn={renderLevelMoveFirstColumn}
          method="level"
        />
        <MethodMoves2 moves={eggMoves} method="egg" />
        <MethodMoves2 moves={tutorMoves} method="tutor" />
        <MethodMoves2
          moves={preMoves}
          renderMoveFirstColumn={renderPreMoveFirstColumn}
          method="pre"
        />
        <MethodMoves2 moves={reminderMoves} method="reminder" />
      </div>
      <MachineMoves machineMoves={machineMoves} />
    </div>
  );
}
