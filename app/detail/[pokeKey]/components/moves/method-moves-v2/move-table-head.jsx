import React from 'react';
import CaretIcon from '@/app/components/icons/caret';

function HeadCell({
  column,
  select,
  selectKey,
  isAsc,
}) {
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
}

export default function Head({
  columns,
  selectKey,
  isAsc,
  handleHeadItemClick,
}) {
  return (
    <div className="flex border-y border-zinc-700/80 divide-zinc-700/80 text-sm md:text-base items-stretch h-[2.4rem] font-medium divide-x">
      {columns.map((column) => (
        <HeadCell
          key={column.key}
          select={handleHeadItemClick}
          selectKey={selectKey}
          isAsc={isAsc}
          column={column}
        />
      ))}
    </div>
  );
}
