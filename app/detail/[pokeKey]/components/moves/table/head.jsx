import React from 'react';
import { useColumns } from './table.context';

export default function Head({
  selectKey,
  isAsc,
  handleTableHeadClick,
  ...props
}) {
  const { columns } = useColumns();

  return (
    <div {...props}>
      {columns.map(({ key, content, ...rest }) => (
        <button
          key={key}
          type="button"
          onClick={() => handleTableHeadClick(key)}
          {...rest}
        >
          {content}
        </button>
      ))}
    </div>
  );
}
