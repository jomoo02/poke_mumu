import React from 'react';
import {
  checkTargetMovesEmpty,
  groupMovesByMachineType,
} from '../../utils/moves';
import MethodMovesTable from './method-moves-table';

function MethodMoves({
  moves,
  initialSortKey,
  titleObj,
  renderMoveFirstColumn,
  firstColumnInfo,
  getMovesKey,
}) {
  if (!moves || moves.length === 0) {
    return null;
  }

  const defaultKey = 'move';

  const defaultGetMovesKey = (move) => move.move.name.en;

  return (
    <MethodMovesTable
      moves={moves}
      initialSortKey={initialSortKey || defaultKey}
      titleObj={titleObj}
      renderMoveFirstColumn={renderMoveFirstColumn}
      firstColumnInfo={firstColumnInfo}
      getMovesKey={getMovesKey || defaultGetMovesKey}
    />
  )
}

function MachineMoves({ moves }) {
  if (!moves || moves.length === 0) {
    return null;
  }

  const machineTypesMoves = groupMovesByMachineType(moves);

  const getTitleObj = (machineType) => ({
    en: `moves learnt by ${machineType}`,
    ko: `기술머신 ${machineType} 으로 익히는 기술`,
  });

  const initialSortkey = 'machine';

  const renderMoveFirstColumn = ({ machine }) => () => <div className="w-14 text-sm px-2 font-medium">{machine.number}</div>

  return (
    <div className="flex flex-col gap-y-10 overflow-auto">
      {machineTypesMoves.map(({ type, moves }) => (
        <MethodMoves
          key={type}
          moves={moves}
          initialSortKey={initialSortkey}
          titleObj={getTitleObj(type)}
          renderMoveFirstColumn={renderMoveFirstColumn}
          firstColumnInfo={{
            key: initialSortkey,
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
    machine,
    egg,
    pre,
    tutor,
    reminder,
    'level-up': levelUp,
  } = versionMoves;

  return (
    <div className="flex flex-wrap gap-y-10 py-3 gap-x-10 justify-evenly">
      <div className="flex flex-col gap-y-10 overflow-auto">
        <MethodMoves
          moves={levelUp}
          initialSortKey="level"
          titleObj={{
            en: 'moves learnt by level up',
            ko: '레벌 업으로 익히는 기술',
          }}
          renderMoveFirstColumn={({ level }) => () => <div className="w-14 text-sm px-2 font-medium">{level}</div>}
          firstColumnInfo={{
            key: 'level',
            content: 'lv.',
            className: 'w-14',
          }}
          getMovesKey={(move) => `${move.level}-${move.move.name.en}`}
        />
        <MethodMoves
          moves={egg}
          titleObj={{
            en: 'egg',
            ko: '교배',
          }}
        />
        <MethodMoves
          moves={tutor}
          titleObj={{
            en: 'tutor',
            ko: 'tutor',
          }}
        />
        <MethodMoves
          moves={reminder}
          titleObj={{
            en: 'reminder',
            ko: 'reminder',
          }}
        />
      </div>
      <MachineMoves moves={machine} />
    </div>
  );
}
