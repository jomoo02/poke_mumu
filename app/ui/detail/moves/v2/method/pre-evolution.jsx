import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import MethodHeader from '../method-header';
import Move from '../move';

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

  if (moves.length === 0) {
    return null;
  }

  const subTitleLanguageText = {
    en: 'pre-evolution moves',
    ko: '이전 진화에서만 얻을 수 있는 기술',
  };

  const subTitleText = subTitleLanguageText[language];
  const sortedMoves = [...moves].sort((a, b) => a.preIds.length - b.preIds.length);

  return (
    <div className="overflow-hidden">
      <h3 className="capitalize">{subTitleText}</h3>
      <div className="flex justify-center xl:justify-start">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader language={language}>
            <div className="w-[5.5rem] text-sm px-1">이전</div>
          </MethodHeader>
          <div>
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
