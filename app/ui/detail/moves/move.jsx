import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import typesKo from '@/app/translations/type';

const DAMAGE_CLASS_MAP = {
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

const RECT_WIDTH = 'w-10 xs:w-11 sm:w-[4.5rem] md:w-20';
const RECT_HEIGHT = 'h-[20px] md:h-[24px]';
const RECT_STYPE = `${RECT_WIDTH} ${RECT_HEIGHT}`;
const TEXT_STYLE = 'text-xs md:text-base';

function Type({ type, language }) {
  const typeText = language === 'ko' ? typesKo[type] : type;
  return (
    <div className={`${type} ${RECT_STYPE} ${TEXT_STYLE} rounded-md text-white font-medium flex justify-center items-center`}>
      {typeText}
    </div>
  );
}

function DamageClass({ damageClass }) {
  const { src, bg } = DAMAGE_CLASS_MAP[damageClass];

  return (
    <div className={`${bg} rounded-md relative ${RECT_STYPE}`}>
      <Image
        src={src}
        alt={damageClass}
        fill
        size="20px"
        style={{ objectFit: 'contain', padding: '3px 0' }}
      />
    </div>
  );
}

export default function Move({ move, children }) {
  const { language } = useLanguage();
  const {
    name,
    type,
    power,
    accuracy,
    damage_class: damageClass,
  } = move;

  const nameText = language === 'ko' ? name.ko : name.en;

  return (
    <div className={
      `${children ? 'grid-cols-7' : 'grid-cols-6'} grid gap-x-1 md:gap-x-2 min-h-9 items-center`
      }
    >
      {children}
      <div className="col-span-2 text-[13px] sm:text-sm md:text-base">{nameText}</div>
      <div className="flex justify-center">
        <Type type={type} language={language} />
      </div>
      <div className="flex justify-center">
        <DamageClass damageClass={damageClass} />
      </div>
      <div className={`${TEXT_STYLE} text-center`}>{power}</div>
      <div className={`${TEXT_STYLE} text-center`}>{accuracy}</div>
    </div>
  );
}
