import React from 'react';
import CaretIcon from '../icons/caret';

type HeadItem = {
  headKey: string;
  content: string;
  className: string;
};

interface HeadCellProps {
  headItem: HeadItem;
  onClickHeadItem: (headKey: string) => void;
  isSelect: boolean;
  isAsc: boolean;
}

interface TableHeadProps {
  headItems: HeadItem[];
  selectedKey: string;
  isAsc: boolean;
  onClickHeadItem: (headKey: string) => void;
}

function HeadCell({
  headItem,
  onClickHeadItem,
  isSelect,
  isAsc,
}: HeadCellProps) {
  const {
    headKey,
    content,
    className,
  } = headItem;

  const backgroundColor = isSelect ? 'bg-blue-200' : 'bg-slate-200';

  const handleButtonClick = () => {
    onClickHeadItem(headKey);
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={`${className} ${backgroundColor} flex items-center justify-between px-2 capitalize`}
    >
      {content}
      <CaretIcon
        isSelect={isSelect}
        isAsc={isAsc}
      />
    </button>
  );
}

export default function TableHead({
  headItems,
  selectedKey,
  isAsc,
  onClickHeadItem,
}: TableHeadProps) {
  return (
    <div className="flex border-y border-zinc-700/80 divide-zinc-700/80 text-sm md:text-base items-stretch h-[2.4rem] font-medium divide-x">
      {headItems.map((headItem) => (
        <HeadCell
          key={headItem.headKey}
          headItem={headItem}
          onClickHeadItem={onClickHeadItem}
          isSelect={headItem.headKey === selectedKey}
          isAsc={isAsc}
        />
      ))}
    </div>
  );
}
