import { useState } from 'react';

export default function useTableHead(initialHeadKey: string) {
  const [sortOrder, setSortOrder] = useState({
    headKey: initialHeadKey, asc: true,
  });

  const handleHeadItemClick = (selectHeadKey: string) => {
    const isAsc = sortOrder.headKey === selectHeadKey ? !sortOrder.asc : false;
    setSortOrder({ headKey: selectHeadKey, asc: isAsc });
  };

  return {
    handleHeadItemClick,
    selectedHeadKey: sortOrder.headKey,
    isAsc: sortOrder.asc,
  };
}
