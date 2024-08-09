import React from 'react';
import {
  IconCaretDownFilled, IconCaretUpFilled, IconCaretUpDownFilled,
} from '@tabler/icons-react';

function CaretIcon({ isSelect = false, isAsc = false }) {
  const size = 14;
  const stroke = 1;

  if (!isSelect) {
    return <IconCaretUpDownFilled size={size} stroke={stroke} />;
  }

  if (isAsc) {
    return <IconCaretDownFilled size={size} stroke={stroke} />;
  }

  return <IconCaretUpFilled size={size} stroke={stroke} />;
}

export const renderColumn = (key, content, sortOrder, handleClick, className = 'w-full') => () => (
  <button
    className={
      `${sortOrder.key === key ? 'bg-blue-200' : 'bg-slate-200'}
      flex items-center justify-between px-2 capitalize h-full
      ${className}
      `
    }
    type="button"
    onClick={() => handleClick(key)}
  >
    {content}
    <CaretIcon
      isSelect={sortOrder.key === key}
      isAsc={sortOrder.asc}
    />
  </button>
);

export const createRenderColumn = (sortOrder, handleClick) => (
  ({ key, content, className }) => renderColumn(key, content, sortOrder, handleClick, className)
);
