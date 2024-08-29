import React from 'react';
import { useColumns } from './table.context';
import {
  LevelCell,
  NameCell,
  MachineCell,
  PrePokeCell,
  TypeCell,
  DamageClassCell,
  PowerCell,
  AccuracyCell,
} from './move-cell';
import { getHeadKeys } from '../utils/method-moves';

export default function Row({ item, rowClassName, renderRowFn }) {
  const columns = useColumns();

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

  return (
    <div className={rowClassName}>
      {/* {columns.map(({ key, className }) => renderRowFn(key, item, className))} */}
      {columns.map(({ key, className }) => {
        const Cell = cellMap[key];
        return <Cell key={key} className={className} move={item} />;
      })}
    </div>
  );
}
