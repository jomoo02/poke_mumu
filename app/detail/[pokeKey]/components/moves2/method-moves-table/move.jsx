import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import Type from '@/app/ui/detail/type';
import TableRow from './table-row';

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

export default function Move({ move, renderColumn1 }) {
  const {
    name,
    type,
    power,
    accuracy,
    damage_class: damageClass,
  } = move;

  const { language } = useLanguage();

  const moveName = name[language] || name.ko;

  const renderColumn2 = () => <span className="text-base font-semibold text-slate-700 px-2.5">{moveName}</span>;

  const renderColumn3 = () => (
    <div className="w-full flex justify-center">
      <Type type={type} language={language} />
    </div>
  );

  const renderColumn4 = () => (
    <div className="w-full flex justify-center">
      <DamageClass damageClass={damageClass} />
    </div>
  );
  const renderColumn5 = () => <div className="text-sm font-medium text-right px-3">{power || '—'}</div>;

  const renderColumn6 = () => <div className="text-sm font-medium text-right px-3">{accuracy || '—'}</div>;

  return (
    <TableRow
      renderColumn1={renderColumn1}
      renderColumn2={renderColumn2}
      renderColumn3={renderColumn3}
      renderColumn4={renderColumn4}
      renderColumn5={renderColumn5}
      renderColumn6={renderColumn6}
    />
  );
}
