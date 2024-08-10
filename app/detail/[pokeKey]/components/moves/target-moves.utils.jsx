import React, { useState } from 'react';
import Image from 'next/image';

export const renderMachineMoveFirstColumn = ({ machine }) => {
  const machineNumber = Number(machine.number);
  const FormattedMachineNumber = machineNumber >= 10 ? `${machineNumber}` : `0${machineNumber}`;
  return <div className="w-14 text-sm px-2 font-medium">{FormattedMachineNumber}</div>;
};

export const renderLevelMoveFirstColumn = ({ level }) => (
  <div className="w-14 text-sm px-2 font-medium">{level}</div>
);

export const renderPreMoveFirstColumn = ({ preIds }) => {
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
};

export const getTableHeadFirstItem = (method) => {
  if (['tm', 'tr', 'hm'].includes(method.toLowerCase())) {
    return ({
      key: 'machine',
      content: `${method}`,
      className: 'w-14',
    });
  }
  const itemMap = {
    level: {
      key: 'level',
      content: 'lv.',
      className: 'w-14',
    },
    pre: {
      key: 'pre',
      content: 'poke',
      className: 'w-[5.5rem]',
    },
  };

  return itemMap[method];
}
