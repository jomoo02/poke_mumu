import { useState } from 'react';
import { useLanguage } from '@/app/language-provider';

function setBaseHeadItems(language) {
  const localeContent = {
    ko: {
      name: '기술',
      type: '타입',
      damageClass: '분류',
      power: '위력',
      accuracy: '명중률',
    },
    en: {
      name: 'name',
      type: 'type',
      damageClass: 'cat.',
      power: 'power',
      accuracy: 'acc.',
    },
  };

  const keys = {
    name: 'name',
    type: 'type',
    damageClass: 'damageClass',
    power: 'power',
    accuracy: 'accuracy',
  };

  const languageContent = localeContent[language] || localeContent.ko;

  const basicItems = [
    { key: keys.name, content: languageContent.name, className: 'w-[10.5rem]' },
    { key: keys.type, content: languageContent.type, className: 'w-[5.25rem]' },
    { key: keys.damageClass, content: languageContent.damageClass, className: 'w-[5.25rem]' },
    { key: keys.power, content: languageContent.power, className: 'w-[5.55rem]' },
    { key: keys.accuracy, content: languageContent.accuracy, className: 'w-[5rem]' },
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
