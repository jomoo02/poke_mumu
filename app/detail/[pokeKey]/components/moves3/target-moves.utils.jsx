import React from 'react';
import CaretIcon from '@/app/components/icons/caret';

export const renderHeadColumnWith = (selectKey, isAsc, select) => (column) => {
  const {
    key,
    content,
    className,
    ...rest
  } = column;

  const isSelect = selectKey === key;

  const backGroundColor = isSelect ? 'bg-blue-200' : 'bg-slate-200';

  const buttonClassName = `${className} ${backGroundColor}`;

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
