'use client';

import React from 'react';
import Image from 'next/image';

const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export default function Forms({ forms, name }) {
  function setH3Text() {
    if (forms.length > 1) {
      return `${name.ko}의 모습들`;
    }
    return `${name.ko}의 모습`;
  }

  const h3Text = setH3Text();
  return (
    <div>
      <h3 className="text-2xl">{h3Text}</h3>
      <div className="flex gap-x-10">
        {forms.map(({ id, name: formName }) => (
          <div
            key={`${id}-${formName.en}`}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={`${url}/${id}.png`}
              width={80}
              height={80}
              alt={id}
              priority
            />
            <div>{formName.ko}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
