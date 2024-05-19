import React from 'react';
import Image from 'next/image';
import MethodMoves from './method-moves';

function Content({ moveData: { preIds } }) {
  const sprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons';
  return (
    <div className="col-span-1 flex flex-col md:flex-row">
      {preIds.map((id) => (
        <Image
          key={id}
          src={`${sprityUrl}/${id}.png`}
          alt={id}
          width={35}
          height={25}
          style={{ width: 35, height: 25 }}
        />
      ))}
    </div>
  );
}

export default function PreEvolutionMethodMoves({ moves }) {
  const methodText = '이전 진화에서만 얻을 수 있는 기술';
  const sortedMoves = [...moves].sort((a, b) => a.preIds.length - b.preIds.length);

  return (
    <MethodMoves
      title={methodText}
      moves={sortedMoves}
      MoveContent={Content}
      method="pre"
      headerContent="단계"
    />
  );
}
