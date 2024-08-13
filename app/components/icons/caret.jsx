import React from 'react';
import {
  IconCaretDownFilled, IconCaretUpFilled, IconCaretUpDownFilled,
} from '@tabler/icons-react';

export default function CaretIcon({
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
