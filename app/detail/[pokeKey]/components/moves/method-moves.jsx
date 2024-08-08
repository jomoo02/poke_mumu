import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import sortMovesWithKey from '@/app/lib/move-sort';
import Move from './move';
import MoveHeader from './move-header';

function PreIdsContent({ preIds }) {
  const sprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons';
  const alterSprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  const initialImageUrls = [...new Set(preIds)].map((id) => ({
    id,
    src: `${sprityUrl}/${id}.png`,
    fallback: `${alterSprityUrl}/${id}.png`,
  }));

  const [imageUrls, setImageUrls] = useState(initialImageUrls);

  const handleImageError = (index) => {
    setImageUrls((preImageUrls) => {
      const newImageUrls = [...preImageUrls];
      newImageUrls[index] = {
        ...newImageUrls[index],
        src: newImageUrls[index].fallback,
      };
      return newImageUrls;
    });
  };

  return (
    <div className="w-[5.5rem] flex">
      {imageUrls.map(({ id, src }, index) => (
        <Image
          key={id}
          src={src}
          alt={id}
          width={35}
          height={25}
          style={{ width: 35, height: 25 }}
          onError={() => handleImageError(index)}
        />
      ))}
    </div>
  );
}

function SortedMoves({ moves, sortOrder, method }) {
  const { key, asc } = sortOrder;

  const { language } = useLanguage();

  const sortedMoves = sortMovesWithKey(moves, key, language, asc);

  const renderMoveContent = (moveData) => {
    switch (method) {
      case 'level-up':
        return (
          <div className="w-14 text-sm px-2 font-medium">
            {moveData.level}
          </div>
        );
      case 'machine':
        return (
          <div className="w-14 text-sm px-2 font-medium">
            {moveData.machine.number}
          </div>
        );
      case 'pre':
        return <PreIdsContent preIds={moveData.preIds} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid divide-y border-b">
      {sortedMoves.map((moveData) => (
        <Move key={moveData.move.name.en} move={moveData.move} language={language}>
          {renderMoveContent(moveData)}
        </Move>
      ))}
    </div>
  );
}

function MethodTitle({ method }) {
  const { language } = useLanguage();

  const machineMethodTemplate = (machineType) => ({
    en: `moves learnt by ${machineType}`,
    ko: `기술머신 ${machineType} 으로 익히는 기술`,
  });

  const localeMethodtitle = {
    en: {
      egg: 'egg moves',
      'level-up': 'moves learnt by level up',
      pre: 'pre-evolution moves',
      reminder: 'moves learnt by reminder',
      tutor: 'move Tutor moves',
    },
    ko: {
      egg: '교배를 통해 유전 받을 수 있는 기술',
      'level-up': '레벌 업으로 익히는 기술',
      pre: '이전 진화에서만 얻을 수 있는 기술',
      reminder: '떠올리기로 익히는 기술',
      tutor: 'NPC로부터 배울 수 있는 기술',
    },
  };
  const title = ['tm', 'hm', 'tr'].includes(method) ? (machineMethodTemplate(method)[language]) : localeMethodtitle[language][method];

  return (
    <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg min-w-[600px]">
      {title}
    </h3>
  );
}

export default function MethodMoves({ moves, initialSortKey, method }) {
  const [sortOrder, setSortOrder] = useState({ key: initialSortKey, asc: true });

  const handleColumnHeaderClick = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });
  };

  const firstRow = ['level-up', 'machine', 'pre'].includes(method) ? ({ key: method })

  return (
    <div className="overflow-hidden">
      <MethodTitle method={method} />
      <div className="flex">
        <div className="grid overflow-x-auto py-0.5">
          <MoveHeader
            onColumnHeaderClick={handleColumnHeaderClick}
            sortOrder={sortOrder}
          />
          <SortedMoves moves={moves} sortOrder={sortOrder} method={method} />
        </div>
      </div>
    </div>
  );
}
