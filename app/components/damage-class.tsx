import React from 'react';
import Image from 'next/image';

type DamageClassType = 'physical' | 'special' | 'status';

export default function DamageClass({ damageClass = 'status' }: { damageClass: DamageClassType }) {
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

  const { src, bg } = damageClassMap[damageClass] || damageClassMap.status;

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
        sizes="20px"
        priority
        style={{ objectFit: 'contain', padding: '2px 0' }}
      />
    </div>
  );
}
