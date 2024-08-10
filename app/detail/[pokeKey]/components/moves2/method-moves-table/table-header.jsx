import React from 'react';
import { useLanguage } from '@/app/language-provider';
import {
  IconCaretDownFilled, IconCaretUpFilled, IconCaretUpDownFilled,
} from '@tabler/icons-react';

function CaretIcon({
  isSelect = false,
  isAsc = false,
  size = 14,
  stroke = 1,
}) {
  if (!isSelect) {
    return <IconCaretUpDownFilled size={size} stroke={stroke} />;
  }

  if (isAsc) {
    return <IconCaretDownFilled size={size} stroke={stroke} />;
  }

  return <IconCaretUpFilled size={size} stroke={stroke} />;
}

function Column({
  columnKey,
  sortOrder,
  handleClick,
  className,
  children,
}) {
  return (
    <button
      className={
        `${sortOrder.key === columnKey ? 'bg-blue-200' : 'bg-slate-200'}
        flex items-center justify-between px-2 capitalize h-full
        ${className}
        `
      }
      type="button"
      onClick={() => handleClick(columnKey)}
    >
      {children}
      <CaretIcon
        isSelect={sortOrder.key === columnKey}
        isAsc={sortOrder.asc}
      />
    </button>
  );
}

function FirstColumn({ firstColumnInfo, sortOrder, handleClick }) {
  if (!firstColumnInfo) {
    return null;
  }

  const { key, className, content } = firstColumnInfo;

  return (
    <Column
      columnKey={key}
      sortOrder={sortOrder}
      handleClick={handleClick}
      className={className}
    >
      {content}
    </Column>
  );
}
export default function TableHeaderRow({
  onTableHeaderClick,
  sortOrder,
  firstColumnInfo,
}) {
  const { language } = useLanguage();

  const localContent = {
    ko: {
      move: '기술',
      type: '타입',
      damage_class: '분류',
      power: '위력',
      accuracy: '명중률',
    },
    en: {
      move: 'move',
      type: 'type',
      damage_class: 'cat.',
      power: 'power',
      accuracy: 'acc.',
    },
  };

  const {
    move,
    type,
    power,
    accuracy,
    damage_class: damageClass,
  } = localContent[language] || localContent.ko;

  return (
    <div className="table-header">
      <FirstColumn
        firstColumnInfo={firstColumnInfo}
        sortOrder={sortOrder}
        handleClick={onTableHeaderClick}
      />
      <Column
        columnKey="move"
        sortOrder={sortOrder}
        handleClick={onTableHeaderClick}
        className="row-second"
      >
        {move}
      </Column>
      <Column
        columnKey="type"
        sortOrder={sortOrder}
        handleClick={onTableHeaderClick}
        className="row-third"
      >
        {type}
      </Column>
      <Column
        columnKey="damageClass"
        sortOrder={sortOrder}
        handleClick={onTableHeaderClick}
        className="row-fourth"
      >
        {damageClass}
      </Column>
      <Column
        columnKey="power"
        sortOrder={sortOrder}
        handleClick={onTableHeaderClick}
        className="row-fifth"
      >
        {power}
      </Column>
      <Column
        columnKey="accuracy"
        sortOrder={sortOrder}
        handleClick={onTableHeaderClick}
        className="row-sixth"
      >
        {accuracy}
      </Column>
    </div>
  );
}
