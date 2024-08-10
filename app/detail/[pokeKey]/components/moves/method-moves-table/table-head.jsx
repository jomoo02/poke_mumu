import React from 'react';
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
  children,
  handleClick,
  isSelect,
  columnClassName,
}) {
  const backGroudColor = isSelect ? 'bg-blue-200' : 'bg-slate-200';
  return (
    <button
      className={
        `${backGroudColor} ${columnClassName} flex items-center justify-between px-2 capitalize h-full`
      }
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default function TableHead({
  sortKey,
  isAsc,
  onTableHeadClick,
  items,
}) {
  return (
    <div
      className="flex border-y border-zinc-700/80 divide-zinc-700/80 text-sm md:text-base h-[2.4rem] font-medium divide-x"
    >
      {items.map(({ key, content, className }) => (
        <Column
          key={key}
          handleClick={() => onTableHeadClick(key)}
          isSelect={sortKey === key}
          columnClassName={className}
        >
          {content}
          <CaretIcon
            isSelect={sortKey === key}
            isAsc={isAsc}
          />
        </Column>
      ))}
    </div>
  );
}
