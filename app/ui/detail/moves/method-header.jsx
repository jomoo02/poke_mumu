import React from 'react';
import { useLanguage } from '@/app/language-provider';
import {
  IconCaretDownFilled, IconCaretUpFilled, IconCaretUpDownFilled,
} from '@tabler/icons-react';

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

const defaultRowInfos = [
  {
    key: 'move',
    text: 'move',
    width: 'w-[10.5rem]',
  },
  {
    key: 'type',
    text: 'type',
    width: 'w-[5.25rem]',
  },
  {
    key: 'damage_class',
    text: 'category',
    width: 'w-[5.25rem]',
  },
  {
    key: 'power',
    text: 'power',
    width: 'w-[5.55rem]',
  },
  {
    key: 'accuracy',
    text: 'accuracy',
    width: 'w-20',
  },
];

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

export default function MethodHeader({
  onColumnHeaderClick, sortOrder, firstRow,
}) {
  const { language } = useLanguage();

  const rowInfos = firstRow
    ? [{ ...firstRow }, ...defaultRowInfos.map((info) => ({
      ...info,
      text: languageText[language][info.key] || info.text,
    }))]
    : defaultRowInfos.map((info) => ({
      ...info,
      text: languageText[language][info.key] || info.text,
    }));

  return (
    <div
      className="flex border-y border-zinc-700/80 divide-zinc-700/80
      text-sm md:text-base items-stretch h-[2.4rem] font-medium divide-x"
    >
      {rowInfos.map(({ key, text, width }) => (
        <button
          className={
            `${width} ${key === sortOrder.key ? 'bg-blue-200' : 'bg-slate-200'}
            flex items-center justify-between px-2 capitalize`
          }
          type="button"
          key={key}
          onClick={() => onColumnHeaderClick(key)}
        >
          {text}
          <CaretIcon isSelect={key === sortOrder.key} isAsc={sortOrder.asc} />
        </button>
      ))}
    </div>
  );
}
