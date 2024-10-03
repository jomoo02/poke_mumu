import React from 'react';
import {
  useStatRow,
  useTotalStat,
} from '../hooks/useStatRow';
import StatRowBar from './stat-row-bar';
import { StatObjType, StatType } from '../types/stat.type';

function RowContainer({
  statType,
  statValue,
  className,
  effortStatValue,
  children,
}: {
  statType: string,
  statValue: number,
  className?: string,
  effortStatValue: number,
  children?: React.ReactNode,
}) {
  return (
    <div className="grid grid-cols-5 py-[2.5px] sm:py-[5px] gap-x-0.5 sm:gap-x-3 items-center h-[30px]">
      <div className="text-[13px] leading-5 sm:text-sm text-right pr-0.5 sm:pr-1.5 capitalize">
        {statType}
      </div>
      <div className="col-span-3 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className={`min-w-9 max-w-9 text-center text-[13px] leading-5 sm:text-sm ${className}`}>
          {statValue}
        </div>
        {children}
      </div>
      <div className={`text-center text-[13px] leading-5 sm:text-sm ${className}`}>
        {effortStatValue}
      </div>
    </div>
  );
}

function TotalStat({
  baseStats,
  effortStats,
}: {
  baseStats: StatType[],
  effortStats: StatType[],
}) {
  const {
    statType,
    statValue,
    effortStatValue,
  } = useTotalStat(baseStats, effortStats);

  return (
    <RowContainer
      statType={statType}
      statValue={statValue}
      effortStatValue={effortStatValue}
      className="font-semibold"
    />
  );
}

function BasicStat({
  statObj,
  maxStatValue,
  className,
}: {
  statObj: StatObjType,
  maxStatValue: number,
  className?: string,
}) {
  const {
    statType,
    statValue,
    effortStatValue,
  } = useStatRow(statObj);

  return (
    <RowContainer
      className={className}
      statType={statType}
      statValue={statValue}
      effortStatValue={effortStatValue}
    >
      <StatRowBar
        value={statValue}
        max={maxStatValue}
      />
    </RowContainer>
  );
}

const StatRow = {
  BasicStat,
  TotalStat,
};

export default StatRow;
