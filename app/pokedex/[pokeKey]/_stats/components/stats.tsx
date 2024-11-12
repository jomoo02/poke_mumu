'use client';

import React from 'react';
import type { StatItem } from '@/app/models/poke.type';
import StatRow from './stat-row';

interface StatsProps {
  statItems: StatItem[];
}

export default function Stats({
  statItems,
}: StatsProps) {
  const maxStatValue = Math.max(...statItems.map(({ value }) => value));

  return (
    <>
      {statItems.map((statItem) => (
        <StatRow.Basic
          key={statItem.stat}
          statItem={statItem}
          maxStatValue={maxStatValue}
        />
      ))}
      <StatRow.Total statItems={statItems} />
    </>
  );
}
