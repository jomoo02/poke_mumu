'use client';

import React from 'react';
import Image from 'next/image';

export default function BasicInfo({
  no, name, sprity, id, order, form,
}) {
  const exceptionOrder = [];
  const bascinUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const url = exceptionOrder.includes(Number(order)) ? `/${order}.png` : `${bascinUrl}/${sprity}`;

  const noText = `No. ${no}`;
  const formText = form.en === 'default' ? '' : `(${form.ko})`;
  const nameText = `${name.ko}${formText}`;
  return (
    <>
      <div className="flex gap-x-4">
        <span>{noText}</span>
        <span>{nameText}</span>
      </div>
      <Image
        src={url}
        alt={name.en}
        width={25}
        height={25}
        priority
      />
    </>
  );
}
