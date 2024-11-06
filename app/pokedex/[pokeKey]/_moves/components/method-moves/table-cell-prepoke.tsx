import React, { useState } from 'react';
import Image from 'next/image';

interface PrePokeProps {
  preIds: number[];
  className: string;
}

export default function PrePoke({
  preIds,
  className,
}: PrePokeProps) {
  const sprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons';
  const alterSprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  const preIdsSet = new Set(preIds);

  const initialImageUrls = [...preIdsSet].map((id) => ({
    id,
    src: `${sprityUrl}/${id}.png`,
    fallback: `${alterSprityUrl}/${id}.png`,
  }));

  const [imageUrls, setImageUrls] = useState(initialImageUrls);

  const handleImageError = (index: number) => {
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
    <div className={`${className} flex items-center`}>
      {imageUrls.map(({ id, src }, index) => (
        <Image
          key={id}
          src={src}
          alt={`${id}`}
          width={35}
          height={25}
          style={{ width: 35, height: 25 }}
          onError={() => handleImageError(index)}
        />
      ))}
    </div>
  );
}
