import React from 'react';
import { useLanguage } from '@/app/language-provider';
import TableRow from './table-row';
import { createRenderColumn } from './table-header.utils';

export default function TableHeaderRow({
  onTableHeaderClick, sortOrder, firstColumnInfo,
}) {
  const { language } = useLanguage();

  const localContent = {
    ko: {
      move: '기술',
      type: '타입',
      damage_class: '분류',
      power: '위력',
      accuracy: '명중률',
    },
    en: {
      move: 'move',
      type: 'type',
      damage_class: 'cat.',
      power: 'power',
      accuracy: 'acc.',
    },
  };

  const {
    move,
    type,
    damage_class: damageClass,
    power,
    accuracy,
  } = localContent[language] || localContent.ko;

  const renderColumnWithDefaults = createRenderColumn(sortOrder, onTableHeaderClick);

  return (
    <TableRow
      className="flex border-y border-zinc-700/80 divide-zinc-700/80
      text-sm md:text-base items-stretch h-[2.4rem] font-medium divide-x"
      renderColumn1={firstColumnInfo && renderColumnWithDefaults({
        ...firstColumnInfo,
      })}
      renderColumn2={renderColumnWithDefaults({ key: 'move', content: move })}
      renderColumn3={renderColumnWithDefaults({ key: 'type', content: type })}
      renderColumn4={renderColumnWithDefaults({ key: 'damageClass', content: damageClass })}
      renderColumn5={renderColumnWithDefaults({ key: 'power', content: power })}
      renderColumn6={renderColumnWithDefaults({ key: 'accuracy', content: accuracy })}
    />
  );
}
