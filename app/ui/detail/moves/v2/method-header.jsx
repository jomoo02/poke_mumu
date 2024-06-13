import React from 'react';

export default function MethodHeader({ children, onSort, language }) {
  const languageText = {
    ko: {
      move: '기술',
      type: '타입',
      category: '분류',
      power: '위력',
      accuracy: '명중률',
    },
    en: {
      move: 'move',
      type: 'type',
      category: 'cat.',
      power: 'power',
      accuracy: 'acc.',
    },
  };

  const {
    move, type, category, power, accuracy,
  } = languageText[language];

  return (
    <div className="flex border-b text-sm md:text-base items-center h-9 capitalize font-semibold divide-x-2">
      {children}
      <button
        className="w-[10.5rem]"
        type="button"
        onClick={() => onSort('name')}
      >
        {move}
      </button>
      <button
        className="w-[5.25rem]"
        type="button"
        onClick={() => onSort('type')}
      >
        {type}
      </button>
      <button
        className="w-[5.25rem]"
        type="button"
        onClick={() => onSort('damage_class')}
      >
        {category}
      </button>
      <button
        className="w-[4rem]"
        type="button"
        onClick={() => onSort('power')}
      >
        {power}
      </button>
      <button
        className="w-[4rem]"
        type="button"
        onClick={() => onSort('accuracy')}
      >
        {accuracy}
      </button>
    </div>
  );
}
