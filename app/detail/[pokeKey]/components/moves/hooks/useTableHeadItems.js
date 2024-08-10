import { useState } from 'react';
import { useLanguage } from '@/app/language-provider';

function setBaseHeadItems(language) {
  const localeContent = {
    ko: {
      move: '기술',
      type: '타입',
      damageClass: '분류',
      power: '위력',
      accuracy: '명중률',
    },
    en: {
      move: 'move',
      type: 'type',
      damageClass: 'cat.',
      power: 'power',
      accuracy: 'acc.',
    },
  };

  const keys = {
    move: 'move',
    type: 'type',
    damageClass: 'damageClass',
    power: 'power',
    accuracy: 'accuracy',
  };

  const languageContent = localeContent[language] || localeContent.ko;

  const basicItems = [
    { key: keys.move, content: languageContent.move, className: 'row-2' },
    { key: keys.type, content: languageContent.type, className: 'row-3' },
    { key: keys.damageClass, content: languageContent.damageClass, className: 'row-4' },
    { key: keys.power, content: languageContent.power, className: 'row-5' },
    { key: keys.accuracy, content: languageContent.accuracy, className: 'row-6' },
  ];

  return basicItems;
}

export default function useTableHeadItmes(firstColumn) {
  const { language } = useLanguage();

  const initialSortKey = firstColumn ? firstColumn.key : 'move';

  const [sortOrder, setSortOrder] = useState({ key: initialSortKey, asc: true });

  const handleTableHeadClick = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });
  };

  const baseItem = setBaseHeadItems(language);

  const items = firstColumn ? [{ ...firstColumn }, ...baseItem] : [...baseItem];

  return {
    items,
    handleTableHeadClick,
    sortOrder,
  };
}
