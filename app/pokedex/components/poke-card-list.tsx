'use client';

import React from 'react';
import TableHead from '@/app/components/sortTable/head';
import useHead from '@/app/components/sortTable/useHead';
import PokeCard from './poke-card';
import type { PokeItem } from '../types/poke';

interface PokeCardListProps {
  pokeList: PokeItem[];
}

export default function PokeCardList({ pokeList }: PokeCardListProps) {
  const headItems = [
    {
      headKey: 'no',
      content: 'no',
      className: 'w-10',
    },
    {
      headKey: 'name',
      content: 'name',
      className: 'w-20',
    },
    {
      headKey: 'types',
      content: 'type',
      className: 'w-14',
    },
    {
      headKey: 'total',
      content: 'total',
      className: 'w-14',
    },
    {
      headKey: 'hp',
      content: 'hp',
      className: 'w-14',
    },
    {
      headKey: 'attack',
      content: 'attack',
      className: 'w-14',
    },
    {
      headKey: 'df',
      content: 'df',
      className: 'w-14',
    },
    {
      headKey: 'sp.atk',
      content: 'sp.atk',
      className: 'w-14',
    },
    {
      headKey: 'sp.df',
      content: 'sp.df',
      className: 'w-14',
    },
    {
      headKey: 'speed',
      content: 'speed',
      className: 'w-14',
    },
  ];

  const {
    handleHeadItemClick,
    selectedHeadKey,
    isAsc,
  } = useHead('no');

  const sortedPokeList = pokeList.sort((a, b) => {
    if (selectedHeadKey === 'no') {
      if (isAsc) {
        return a.order - b.order;
      }
      return b.order - a.order;
    } if (selectedHeadKey === 'name') {
      return a.name.ko - b.name.ko;
    } if (selectedHeadKey === 'speed') {
      if (isAsc) {
        return a.stats[5].value - b.stats[5].value;
      }
      return b.stats[5].value - a.stats[5].value;
    }
  });

  return (
    <div>
      <TableHead
        headItems={headItems}
        onClickHeadItem={handleHeadItemClick}
        isAsc={isAsc}
        selectedKey={selectedHeadKey}
      />
      {sortedPokeList.map((poke) => <PokeCard key={poke.order} poke={poke} />)}
    </div>
  );
}
