import React from 'react';
import CaretIcon from '@/app/components/icons/caret';

interface HeadCellProps {
  headItem: {
    key: string;
    content: string;
    className: string;
  };
  onClickHeadItem: (itemKey: string) => React.MouseEventHandler<HTMLButtonElement>;
  selectedKey: string;
  isAsc: boolean;
}

function HeadCell({
  headItem,
  onClickHeadItem,
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
    onClickHeadItem(key);
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

// export default function TableHead({
//   headItems,
//   selectedKey,
//   isAsc,
//   onClick
// })