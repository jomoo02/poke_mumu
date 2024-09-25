import React from 'react';
import CaretIcon from '@/app/components/icons/caret';

function HeadCell({
  headItem,
  onClickHeadItem,
  selectedKey,
  isAsc,
}) {
  const {
    key,
    content,
    className,
    ...rest
  } = headItem;

  const isSelect = selectedKey === key;

  const backGroundColor = isSelect ? 'bg-blue-200' : 'bg-slate-200';

  const buttonClassName = `${className} ${backGroundColor} flex items-center justify-between px-2 capitalize`;

  const handleClick = () => {
    onClickHeadItem(key);
  };

  return (
    <button
      key={key}
      type="button"
      onClick={handleClick}
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

export default function MoveTableHead({
  headItems,
  selectedKey,
  isAsc,
  onClickHeadItem,
}) {
  return (
    <div className="flex border-y border-zinc-700/80 divide-zinc-700/80 text-sm md:text-base items-stretch h-[2.4rem] font-medium divide-x">
      {headItems.map((headItem) => (
        <HeadCell
          key={headItem.key}
          onClickHeadItem={onClickHeadItem}
          selectedKey={selectedKey}
          isAsc={isAsc}
          headItem={headItem}
        />
      ))}
    </div>
  );
}
