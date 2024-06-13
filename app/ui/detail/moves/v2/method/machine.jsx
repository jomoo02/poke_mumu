import React from 'react';
import { useLanguage } from '@/app/language-provider';
import MethodHeader from '../method-header';
import Move from '../move';

export default function MachineMethodMoves({ moves, machineType }) {
  const { language } = useLanguage();

  const curMachineType = machineType.toUpperCase();

  if (moves.length === 0) {
    return null;
  }

  const subTitleLanguageText = {
    en: `moves learnt by ${curMachineType}`,
    ko: `기술머신 ${curMachineType} 으로 익히는 기술`,
  };

  const subTitleText = subTitleLanguageText[language];

  return (
    <div className="overflow-hidden">
      <h3 className="capitalize">{subTitleText}</h3>
      <div className="flex justify-center xl:justify-start">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader language={language}>
            <div className="w-10 text-sm">{curMachineType}</div>
          </MethodHeader>
          <div>
            {moves.map(({ machine, move }) => (
              <Move key={move.name.en} move={move} language={language}>
                <div className="w-10 text-sm">{machine.name.slice(2)}</div>
              </Move>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
