import React from 'react';
import { useLanguage } from '@/app/language-provider';
import {
  IconCaretDownFilled, IconCaretUpFilled, IconCaretUpDownFilled,
} from '@tabler/icons-react';
import TableRow from '@/app/detail/[pokeKey]/components/moves2/table-row';

const languageText = {
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

function CaretIcon({ isSelect = false, isAsc = false }) {
  if (!isSelect) {
    return (
      <IconCaretUpDownFilled size={14} stroke={1} />
    );
  }

  if (isAsc) {
    return <IconCaretDownFilled size={14} stroke={1} />;
  }

  return <IconCaretUpFilled size={14} stroke={1} />;
}

export default function MethodHeader2({
  onColumnHeaderClick, sortOrder, firstRow, renderColumn1,
}) {
  const { language } = useLanguage();

  const renderColumn = (key, content) => () => (
    <button
      className={
        `${sortOrder.key === key ? 'bg-blue-200' : 'bg-slate-200'}
        flex items-center justify-between px-2 capitalize w-full 
        `
      }
      type="button"
      onClick={() => onColumnHeaderClick(key)}
    >
      {content}
      <CaretIcon isSelect={sortOrder.key === key} isAsc={sortOrder.asc} />
    </button>
  );

  return (
    <TableRow
      className="flex border-y border-zinc-700/80 divide-zinc-700/80
      text-sm md:text-base items-stretch h-[2.4rem] font-medium divide-x"
      renderMove={renderColumn('move', 'move')}
      renderType={renderColumn('type', 'type')}
      renderDamageClass={renderColumn('damageClass', 'damageClass')}
      renderPower={renderColumn('power', 'power')}
      renderAccuracy={renderColumn('accuracy', 'accuracy')}
    >
      {renderColumn1()}
    </TableRow>
  );
}
