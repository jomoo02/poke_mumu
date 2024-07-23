import React, { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import sortMovesWithKey from '@/app/lib/move-sort';
import MethodHeader from '../method-header';
import Move from '../move';

const getSubTitleLanguageText = (machineType) => ({
  en: `moves learnt by ${machineType}`,
  ko: `기술머신 ${machineType} 으로 익히는 기술`,
});

const defaultFirstRow = {
  key: 'machine',
  width: 'w-14',
  text: 'TM',
};

function SortMoves({ moves, sortOrder }) {
  const { key, asc } = sortOrder;

  const { language } = useLanguage();

  const sortedMoves = sortMovesWithKey(moves, key, language, asc);

  return (
    <div className="grid divide-y border-b">
      {sortedMoves.map(({ machine, move }) => (
        <Move key={move.name.en} move={move} language={language}>
          <div className="w-14 text-sm px-2 font-medium">{machine.number}</div>
        </Move>
      ))}
    </div>
  );
}

export default function MachineMethodMoves({ moves, machineType }) {
  const { language } = useLanguage();

  const [sortOrder, setSortOrder] = useState({ key: 'machine', asc: true });

  const curMachineType = machineType.toUpperCase();

  const subTitleText = getSubTitleLanguageText(curMachineType)[language];

  const firstRow = { ...defaultFirstRow, text: curMachineType };

  const handleColumnHeaderClick = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });
  };

  return (
    <div className="overflow-hidden">
      <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg">
        {subTitleText}
      </h3>
      <div className="flex">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader
            onColumnHeaderClick={handleColumnHeaderClick}
            sortOrder={sortOrder}
            firstRow={firstRow}
          />
          <SortMoves
            moves={moves}
            sortOrder={sortOrder}
          />
        </div>
      </div>
    </div>
  );
}
