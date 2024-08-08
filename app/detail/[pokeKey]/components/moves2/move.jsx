import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';

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

export default function Move({ move, children }) {
  const {
    name,
    type,
    power,
    accuracy,
    damage_class: damageClass,
  } = move;

  const { language } = useLanguage();

  const moveName = name[language] || name.ko;

  return (
    
  )  
}