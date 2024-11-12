import { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import {
  type Method,
} from '../data/method';
import {
  localizedMoveTableHeadContents,
  type CellKey,
  type MoveTableHeadContents,
  type HeadItem,
} from '../data/cellKey';

const specialCase: Partial<Record<Method, CellKey>> = {
  level: 'level',
  pre: 'pre',
  tm: 'tm',
  hm: 'hm',
  tr: 'tr',
};

function setInitialSortKeyWithMethod(method: Method): CellKey {
  const normal = 'name';

  return specialCase[method] || normal;
}

function setHeadItems(
  method: Method,
  moveTableHeadContents: MoveTableHeadContents,
) {
  const setHeadItem = (key: CellKey, content: string): HeadItem => ({
    key,
    content,
    className: `head-${key}`,
  });

  const basicCellKey: CellKey[] = [
    'name',
    'type',
    'damageClass',
    'power',
    'accuracy',
  ];

  const basicHeadItems = basicCellKey.map((key) => setHeadItem(key, moveTableHeadContents[key]));

  const specialCaseMethodCellKey = specialCase[method];

  if (specialCaseMethodCellKey) {
    return [
      {
        ...setHeadItem(specialCaseMethodCellKey, moveTableHeadContents[specialCaseMethodCellKey]),
      },
      ...basicHeadItems,
    ];
  }
  return [...basicHeadItems];
}

export default function useMethodMoveTableHead(method: Method) {
  const { language } = useLanguage();

  const initialSortKey = setInitialSortKeyWithMethod(method);

  const [sortOrder, setSortOrder] = useState({
    key: initialSortKey,
    asc: true,
  });

  const handleHeadItem = (headItemKey: CellKey) => {
    const isAsc = sortOrder.key === headItemKey ? !sortOrder.asc : false;
    setSortOrder({ key: headItemKey, asc: isAsc });
  };

  const localeHeadContents = localizedMoveTableHeadContents[language];

  const headItems = setHeadItems(method, localeHeadContents);

  return {
    headItems,
    handleHeadItem,
    selectedKey: sortOrder.key,
    isAsc: sortOrder.asc,
  };
}
