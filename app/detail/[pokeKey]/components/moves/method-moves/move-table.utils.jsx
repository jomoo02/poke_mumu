import React from 'react';
import CaretIcon from '@/app/components/icons/caret';
import Type from '@/app/components/type';
import DamageClass from '@/app/components/damage-class';
import Move from '../../move';
import PrePoke from '../../pre-poke';
import { getHeadKeys } from '../utils/method-moves';

export const renderHeadColumnWith = (selectKey, isAsc, select) => {
  const renderHeadColumn = (column) => {
    const {
      key,
      content,
      className,
      ...rest
    } = column;

    const isSelect = selectKey === key;

    const backGroundColor = isSelect ? 'bg-blue-200' : 'bg-slate-200';

    const buttonClassName = `${className} ${backGroundColor} flex items-center justify-between px-2 capitalize`;

    const handleColumnClick = () => {
      select(key);
    };

    return (
      <button
        key={key}
        type="button"
        onClick={handleColumnClick}
        className={buttonClassName}
        {...rest}
      >
        {content}
        <CaretIcon
          isSelect={isSelect}
          isAsc={isAsc}
        />
      </button>
    );
  };

  renderHeadColumn.displayName = 'RenderHeadColumn';
  return renderHeadColumn;
};

export const renderLevelCell = ({ level }, className) => (
  <div
    key="level"
    className={`${className} text-sm px-2 font-medium flex items-center`}
  >
    {level}
  </div>
);

export const renderNameCell = ({ move }, className) => (
  <Move
    key="move"
    move={move}
    className={className}
  />
);

export const renderMachineCell = ({ machine }, className) => {
  const machineNumber = Number(machine.number);
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

export const renderPrePokeCell = ({ preIds }, className) => (
  <PrePoke
    key="pre-poke"
    preIds={preIds}
    className={className}
  />
);

export const renderTypeCell = ({ move }, className) => (
  <div
    key="type"
    className={`${className} flex justify-center items-center`}
  >
    <Type type={move.type} />
  </div>
);

export const renderDamageClassCell = ({ move }, className) => (
  <div
    key="damage-class"
    className={`${className} flex justify-center items-center`}
  >
    <DamageClass damageClass={move.damage_class} />
  </div>
);

export const renderPowerCell = ({ move }, className) => (
  <div
    key="power"
    className={`text-sm font-medium px-3 ${className} flex items-center justify-end`}
  >
    {move.power || '—'}
  </div>
);

export const renderAccuracyCell = ({ move }, className) => (
  <div
    key="accuracy"
    className={`text-sm font-medium px-3 ${className}  flex items-center justify-end`}
  >
    {move.accuracy || '—'}
  </div>
);

renderLevelCell.displayName = 'RenderLevelCell';
renderNameCell.displayName = 'RenderNameCell';
renderMachineCell.displayName = 'RenderMachineCell';
renderPrePokeCell.displayName = 'RenderPrePokeCell';
renderTypeCell.displayName = 'RenderTypeCell';
renderDamageClassCell.displayName = 'RenderDamageClassCell';
renderPowerCell.displayName = 'RenderPowerCell';
renderAccuracyCell.displayName = 'RenderAccuracyCell';

export function renderMoveCellWith(key, move, className) {
  const {
    name,
    type,
    damageClass,
    power,
    accuracy,
    level,
    pre,
    tm,
    tr,
    hm,
  } = getHeadKeys();

  const renderFnMap = {
    [name]: renderNameCell,
    [type]: renderTypeCell,
    [damageClass]: renderDamageClassCell,
    [power]: renderPowerCell,
    [accuracy]: renderAccuracyCell,
    [level]: renderLevelCell,
    [tm]: renderMachineCell,
    [tr]: renderMachineCell,
    [hm]: renderMachineCell,
    [pre]: renderPrePokeCell,
  };

  const renderFn = renderFnMap[key] || renderFnMap.name;

  renderFn.displayName = `RenderMoveCellWith_${key}`;

  return renderFn(move, className);
}
