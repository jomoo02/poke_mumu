import React from 'react';
import Image from 'next/image';
import Type from '../../type';

function DamageClass({ damageClass }) {
  const damageClassMap = {
    physical: {
      src: '/damage/physical.png',
      bg: 'bg-orange-400/90',
    },
    special: {
      src: '/damage/special.png',
      bg: 'bg-blue-400/90',
    },
    status: {
      src: '/damage/status.png',
      bg: 'bg-gray-400/90',
    },
  };

  const { src, bg } = damageClassMap[damageClass];

  return (
    <div
      className={
        `${bg} w-[60px] xs:w-[63px] h-[24px] xs:h-[25px] rounded-[5px] border border-zinc-700/80 relative`
      }
    >
      <Image
        src={src}
        alt={damageClass}
        fill
        size="20px"
        style={{ objectFit: 'contain', padding: '2px 0' }}
      />
    </div>
  );
}

export default function Move({ move, children, language }) {
  const {
    name,
    type,
    power,
    accuracy,
    damage_class: damageClass,
  } = move;

  const nameText = language === 'ko' ? name.ko : name.en;

  return (
    <div className="flex min-h-9 items-center">
      {children}
      <div className="text-sm md:text-base w-[10.25rem] px-2.5 md:w-44 font-semibold text-slate-700">
        {nameText}
      </div>
      <div className="flex justify-center w-[5.25rem]">
        <Type type={type} language={language} />
      </div>
      <div className="flex justify-center w-[5.25rem]">
        <DamageClass damageClass={damageClass} />
      </div>
      <div className="text-sm md:text-base text-right w-[5.55rem] px-3">{power || '—'}</div>
      <div className="text-sm md:text-base text-right w-[5rem] px-3">{accuracy || '—'}</div>
    </div>
  );
}
