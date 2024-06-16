import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
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

const defaultSortOrder = { key: 'preIds', asc: true };

const sortMoves = (moves) => [...moves].sort((a, b) => {
  const aPreIds = a.preIds;
  const bPreIds = b.preIds;
  if (aPreIds.length !== bPreIds.length) {
    return aPreIds.length - bPreIds.length;
  }
  const aSumIds = aPreIds.reduce((acc, cur) => acc + Number(cur), 0);
  const bSumIds = bPreIds.reduce((acc, cur) => acc + Number(cur), 0);
  return aSumIds - bSumIds;
});

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

export default function TutorMethodMoves({ moves }) {
  const { language } = useLanguage();
  const [sortedMoves, setSortedMoves] = useState(sortMoves(moves));
  const [sortOrder, setSortOrder] = useState({ ...defaultSortOrder });

  const subTitleText = subTitleLanguageText[language];

  const handleSortMoves = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });

    setSortedMoves((beforeMoves) => {
      if (key === 'preIds') {
        const levelSortedMoves = sortMoves(beforeMoves);
        return isAsc ? levelSortedMoves : levelSortedMoves.reverse();
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
      <div className="flex justify-center xl:justify-start">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader
            onSort={handleSortMoves}
            sortOrder={sortOrder}
            firstRow={defaultFirstRow}
          />
          <div className="grid divide-y border-b">
            {sortedMoves.map(({ preIds, move }) => (
              <Move key={move.name.en} move={move} language={language}>
                <Content preIds={preIds} />
              </Move>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
