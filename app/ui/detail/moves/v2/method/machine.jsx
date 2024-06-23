import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/language-provider';
import MethodHeader from '../method-header';
import Move from '../move';

const getSubTitleLanguageText = (machineType) => ({
  en: `moves learnt by ${machineType}`,
  ko: `기술머신 ${machineType} 으로 익히는 기술`,
});

const defaultFirstRow = {
  key: 'machine',
  width: 'w-12',
  text: 'TM',
};

const sortMoves = (moves) => [...moves].sort((a, b) => {
  const getNumber = (str) => parseInt(str.match(/\d+/), 10) || 0;
  return getNumber(a.machine.name) - getNumber(b.machine.name);
});

const defaultSortOrder = { key: 'machine', asc: true };

export default function MachineMethodMoves({ moves, machineType }) {
  const { language } = useLanguage();
  const [sortedMoves, setSortedMoves] = useState(sortMoves(moves));
  const [sortOrder, setSortOrder] = useState({ ...defaultSortOrder });

  const curMachineType = machineType.toUpperCase();

  const subTitleText = getSubTitleLanguageText(curMachineType)[language];

  const firstRow = { ...defaultFirstRow, text: curMachineType };

  const handleSortMoves = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });

    setSortedMoves((beforeMoves) => {
      if (key === 'machine') {
        const machineSortedMoves = sortMoves(beforeMoves);
        return isAsc ? machineSortedMoves : machineSortedMoves.reverse();
      }

      return [...beforeMoves].sort((a, b) => {
        if (key === 'move') {
          return isAsc
            ? a.move.name[language].localeCompare(b.move.name[language])
            : b.move.name[language].localeCompare(a.move.name[language]);
        } if (['type', 'damage_class'].includes(key)) {
          return isAsc
            ? a.move[key].localeCompare(b.move[key])
            : b.move[key].localeCompare(a.move[key]);
        }
        return isAsc ? a.move[key] - b.move[key] : b.move[key] - a.move[key];
      });
    });
  };

  useEffect(() => {
    setSortedMoves(sortMoves(moves));
    setSortOrder({ ...defaultSortOrder });
  }, [moves]);

  return (
    <div className="overflow-hidden">
      <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg">{subTitleText}</h3>
      <div className="flex">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader
            onSort={handleSortMoves}
            sortOrder={sortOrder}
            firstRow={firstRow}
          />
          <div className="grid divide-y border-b">
            {sortedMoves.map(({ machine, move }) => (
              <Move key={move.name.en} move={move} language={language}>
                <div className="w-12 text-sm px-2 font-medium">{machine.name.slice(2)}</div>
              </Move>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
