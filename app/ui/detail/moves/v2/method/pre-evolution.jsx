import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import sortMovesWithKey from '@/app/lib/move-sort';
import MethodHeader from '../method-header';
import Move from '../move';

const subTitleLanguageText = {
  en: 'pre-evolution moves',
  ko: '이전 진화에서만 얻을 수 있는 기술',
};

const defaultFirstRow = {
  key: 'preIds',
  width: 'w-[5.5rem]',
  text: 'poke',
};

function Content({ preIds }) {
  const sprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons';
  const alterSprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  const initialImageUrls = preIds.map((id) => ({
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

function SortMoves({ moves, sortOrder }) {
  const { key, asc } = sortOrder;

  const { language } = useLanguage();

  const sortedMoves = sortMovesWithKey(moves, key, language, asc);

  return (
    <div className="grid divide-y border-b">
      {sortedMoves.map(({ preIds, move }) => (
        <Move key={move.name.en} move={move} language={language}>
          <Content preIds={preIds} />
        </Move>
      ))}
    </div>
  );
}

export default function TutorMethodMoves({ moves }) {
  const { language } = useLanguage();
  const [sortOrder, setSortOrder] = useState({ key: 'preIds', asc: true });

  const subTitleText = subTitleLanguageText[language];

  const handleColumnHeaderClick = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });
  };

  return (
    <div className="overflow-hidden">
      <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg">{subTitleText}</h3>
      <div className="flex">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader
            onColumnHeaderClick={handleColumnHeaderClick}
            sortOrder={sortOrder}
            firstRow={defaultFirstRow}
          />
          <SortMoves moves={moves} sortOrder={sortOrder} />
        </div>
      </div>
    </div>
  );
}
