import { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import {
  setInitialSortKeyWithMethod,
  setBasicHeadItems,
  setSpecialCaseHeadItem,
} from '../utils/moveTableHeadUtils';

export default function useMoveTableHead(method) {
  const { langauge } = useLanguage();

  const initialSortKey = setInitialSortKeyWithMethod(method);

  const [sortOrder, setSortOrder] = useState({
    key: initialSortKey, asc: true,
  });

  const handleHeadItemClick = (selectKey) => {
    const isAsc = sortOrder.key === selectKey ? !sortOrder.asc : false;
    setSortOrder({ key: selectKey, asc: isAsc });
  };

  const basicHeadItems = setBasicHeadItems(langauge);

  const specialCaseHeadItem = setSpecialCaseHeadItem(method, langauge);

  const headItems = specialCaseHeadItem
    ? [{ ...specialCaseHeadItem }, ...basicHeadItems]
    : [...basicHeadItems];

  return {
    headItems,
    handleHeadItemClick,
    selectedKey: sortOrder.key,
    isAsc: sortOrder.asc,
  };
}
