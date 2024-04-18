import React from 'react';
import Image from 'next/image';

export default function BasicInfo({ no, name, sprity }) {
  const noText = `No. ${no}`;
  return (
    <>
      <div className="flex gap-x-4">
        <span>{noText}</span>
        <span>{name.ko}</span>
      </div>
      <Image
        src={sprity}
        alt={name.en}
        width={250}
        height={250}
        priority
      />
    </>
  );
}
