import { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import {
  setBaseHeadItems,
  setSpecialCaseHeadItem,
  setInitialSortKeyWithMethod,
} from '../utils/method-moves';


export default function useMethodMovesHead(method) {
  const initialSortKey = setInitialSortKeyWithMethod(method);

  const [sortOrder, setSortOrder] = useState({
    key: initialSortKey, asc: true,
  });

  const handleHeadItemClick = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });
  };

  const { language } = useLanguage();

  const baseHeadItems = setBaseHeadItems(language);

  const specialCaseHeadItem = setSpecialCaseHeadItem(method);

  const headItems = specialCaseHeadItem
    ? [{ ...specialCaseHeadItem }, ...baseHeadItems]
    : [...baseHeadItems];

  return {
    headItems,
    handleHeadItemClick,
    selectKey: sortOrder.key,
    isAsc: sortOrder.asc,
  };
}
