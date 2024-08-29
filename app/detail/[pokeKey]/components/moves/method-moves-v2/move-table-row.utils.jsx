import React from 'react';
import Type from '@/app/components/type';
import DamageClass from '@/app/components/damage-class';
import { getHeadKeys } from '../utils/method-moves';
import Move from '../../move';
import PrePoke from '../../pre-poke';

export const LevelCell = ({ move, className }) => (
  <div
    key="level"
    className={`${className} text-sm px-2 font-medium flex items-center`}
  >
    {move.level}
  </div>
);

export const NameCell = ({ move, className }) => (
  <Move
    key="move"
    move={move.move}
    className={className}
  />
);

export const MachineCell = ({ move, className }) => {
  const machineNumber = Number(move.machine.number);
  const FormattedMachineNumber = machineNumber >= 10 ? `${machineNumber}` : `0${machineNumber}`;

  return (
    <div
      key="machine"
      className={`${className} text-sm px-2 font-medium flex items-center`}
    >
      {FormattedMachineNumber}
    </div>
  );
};

export const PrePokeCell = ({ move, className }) => (
  <PrePoke
    key="pre-poke"
    preIds={move.preIds}
    className={className}
  />
);

export const TypeCell = ({ move, className }) => (
  <div
    key="type"
    className={`${className} flex justify-center items-center`}
  >
    <Type type={move.move.type} />
  </div>
);

export const DamageClassCell = ({ move, className }) => (
  <div
    key="damage-class"
    className={`${className} flex justify-center items-center`}
  >
    <DamageClass damageClass={move.move.damage_class} />
  </div>
);

export const PowerCell = ({ move, className }) => (
  <div
    key="power"
    className={`text-sm font-medium px-3 ${className} flex items-center justify-end`}
  >
    {move.move.power || '—'}
  </div>
);

export const AccuracyCell = ({ move, className }) => (
  <div
    key="accuracy"
    className={`text-sm font-medium px-3 ${className}  flex items-center justify-end`}
  >
    {move.move.accuracy || '—'}
  </div>
);

export function CellByKey({ cellKey, move, className }) {
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
  } = getHeadKeys();

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
