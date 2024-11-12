import React from 'react';
import CaretIcon from '@/app/components/icons/caret';
import type { CellKey } from '../../data/cellKey';

interface HeadCellProps {
  headItem: {
    key: CellKey;
    content: string;
    className: string;
  };
  handleHeadItem: (itemKey: CellKey) => void;
  selectedKey: string;
  isAsc: boolean;
}

export default function HeadCell({
  headItem,
  handleHeadItem,
  selectedKey,
  isAsc,
}: HeadCellProps) {
  const {
    key,
    content,
    className,
  } = headItem;

  const isSelect = selectedKey === key;

  const backGroundColor = isSelect ? 'bg-blue-200' : 'bg-slate-200';

  const buttonClassName = `${className} ${backGroundColor} flex items-center justify-between px-2 capitalize`;

  const handleClickHeadItem = () => {
    handleHeadItem(key);
  };

  return (
    <button
      key={key}
      type="button"
      onClick={handleClickHeadItem}
      className={buttonClassName}
    >
      {content}
      <CaretIcon
        isSelect={isSelect}
        isAsc={isAsc}
      />
    </button>
  );
}
