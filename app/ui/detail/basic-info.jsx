'use client';

import React from 'react';
import Image from 'next/image';
import Type from './type';

export default function BasicInfo({
  no, name, sprity, order, form, types,
}) {
  const exceptionOrder = [];
  const bascinUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const url = exceptionOrder.includes(Number(order)) ? `/${order}.png` : `${bascinUrl}/${sprity}`;

  const noText = `No. ${no}`;
  const formText = form.en === 'default' ? '' : `(${form.ko})`;
  const nameText = `${name.ko}${formText}`;
  return (
    <div>
      <div>
        <div className="grid gap-y-2">
          <div className="flex gap-x-4">
            <span>{noText}</span>
            <span>{nameText}</span>
          </div>
          <div className="flex gap-x-2">
            {types.map((type) => <Type type={type} key={type} />)}
          </div>
        </div>
        <Image
          src={url}
          alt={name.en}
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  );
}
