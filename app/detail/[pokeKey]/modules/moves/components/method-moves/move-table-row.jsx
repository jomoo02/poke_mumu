import React from 'react';
import Type from '@/app/components/type';
import DamageClass from '@/app/components/damage-class';
import { heads } from '../../data/head';
import Move from '../../../../components/move';
import PrePoke from '../../../../components/pre-poke';

function LevelCell({ move, className }) {
  return (
    <div
      key="level"
      className={`${className} text-sm px-2 font-medium flex items-center`}
    >
      {move.level}
    </div>
  );
}

function NameCell({ move, className }) {
  return (
    <Move
      key="move"
      move={move.move}
      className={className}
    />
  );
}

function MachineCell({ move, className }) {
  const machineNumber = Number(move.machine.number);

  const formattedMachineNumber = machineNumber >= 10
    ? `${machineNumber}`
    : `0${machineNumber}`;

  return (
    <div
      key="machine"
      className={`${className} text-sm px-2 font-medium flex items-center`}
    >
      {formattedMachineNumber}
    </div>
  );
}

function PrePokeCell({ move, className }) {
  return (
    <PrePoke
      key="pre-poke"
      preIds={move.preIds}
      className={className}
    />
  );
}

function TypeCell({ move, className }) {
  return (
    <div
      key="type"
      className={`${className} flex justify-center items-center`}
    >
      <Type type={move.move.type} />
    </div>
  );
}

function DamageClassCell({ move, className }) {
  return (
    <div
      key="damage-class"
      className={`${className} flex justify-center items-center`}
    >
      <DamageClass damageClass={move.move.damage_class} />
    </div>
  );
}

function PowerCell({ move, className }) {
  return (
    <div
      key="power"
      className={`text-sm font-medium px-3 ${className} flex items-center justify-end`}
    >
      {move.move.power || '—'}
    </div>
  );
}

function AccuracyCell({ move, className }) {
  return (
    <div
      key="accuracy"
      className={`text-sm font-medium px-3 ${className}  flex items-center justify-end`}
    >
      {move.move.accuracy || '—'}
    </div>
  );
}

function CellByKey({
  cellKey,
  move,
  className,
}) {
  const {
    name,
    type,
    damageClass,
    power,
    accuracy,
    level,
    pre,
    hm,
    tm,
    tr,
  } = heads();

  const cellMap = {
    [name]: NameCell,
    [type]: TypeCell,
    [damageClass]: DamageClassCell,
    [power]: PowerCell,
    [accuracy]: AccuracyCell,
    [level]: LevelCell,
    [pre]: PrePokeCell,
    [hm]: MachineCell,
    [tm]: MachineCell,
    [tr]: MachineCell,
  };

  const TargetCell = cellMap[cellKey];

  return <TargetCell move={move} className={className} />;
}

export default function MoveTableRow({
  item,
  columns,
}) {
  return (
    <div className="flex h-9 items-stretch">
      {columns.map(({ key, className }) => (
        <CellByKey
          key={key}
          className={className}
          move={item}
          cellKey={key}
        />
      ))}
    </div>
  );
}
