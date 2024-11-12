import React from 'react';
import { useLanguage } from '@/app/language-provider';
import PokeType from '@/app/components/poke-type';
import DamageClass from '@/app/components/damage-class';
import type { Move } from '@/app/models/detail.type';
import PrePoke from './table-cell-prepoke';
import type { CellKey } from '../../data/cellKey';

interface MoveCellProps {
  move: Move;
  className: string;
}

function LevelCell({
  move,
  className,
}: MoveCellProps) {
  return (
    <div
      key="level"
      className={`${className} text-sm px-2 font-medium flex items-center`}
    >
      {move.level}
    </div>
  );
}

function Namecell({
  move,
  className,
}: MoveCellProps) {
  const { language } = useLanguage();

  const moveName = move.move.name[language];

  return (
    <div
      className={`${className} text-base font-semibold text-slate-700 px-2.5 flex items-center`}
    >
      {moveName}
    </div>
  );
}

function MachineCell({
  move,
  className,
}: MoveCellProps) {
  if (!move.machine?.number) {
    return null;
  }

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

function TypeCell({
  move,
  className,
}: MoveCellProps) {
  return (
    <div
      key="type"
      className={`${className} flex justify-center items-center`}
    >
      <PokeType type={move.move.type} />
    </div>
  );
}

function DamageClassCell({
  move,
  className,
}: MoveCellProps) {
  return (
    <div
      key="damage-class"
      className={`${className} flex justify-center items-center`}
    >
      <DamageClass damageClass={move.move.damage_class} />
    </div>
  );
}

function PowerCell({
  move,
  className,
}: MoveCellProps) {
  return (
    <div
      key="power"
      className={`text-sm font-medium px-3 ${className} flex items-center justify-end`}
    >
      {move.move.power || '—'}
    </div>
  );
}

function AccuracyCell({
  move,
  className,
}: MoveCellProps) {
  return (
    <div
      key="accuracy"
      className={`text-sm font-medium px-3 ${className} flex items-center justify-end`}
    >
      {move.move.accuracy || '—'}
    </div>
  );
}

function PrePokeCell({
  move,
  className,
}: MoveCellProps) {
  if (!move.preIds || move.preIds.length === 0) {
    return null;
  }

  return (
    <PrePoke
      key="pre-poke"
      preIds={move.preIds}
      className={className}
    />
  );
}

export default function TableCell({
  cellKey,
  move,
  className,
}: {
  cellKey: CellKey;
  move: Move,
  className: string;
}) {
  const cellComponentsMap: Record<CellKey, React.ComponentType<MoveCellProps>> = {
    name: Namecell,
    type: TypeCell,
    damageClass: DamageClassCell,
    power: PowerCell,
    accuracy: AccuracyCell,
    level: LevelCell,
    pre: PrePokeCell,
    hm: MachineCell,
    tm: MachineCell,
    tr: MachineCell,
  };

  const Component = cellComponentsMap[cellKey];

  return <Component move={move} className={className} />;
}
