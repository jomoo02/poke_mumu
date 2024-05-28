'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import TriggierV2 from './triggerV2';

const getSprityUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const gridColumn = {
  1: 'grid grid-cols-1',
  2: 'grid grid-cols-2 md:grid-cols-1',
  3: 'grid grid-cols-1 md:grid-cols-1',
  4: 'grid-grid-cols-4 md:grid-cols-1',
  7: 'grid grid-cols-7 md:grid-cols-1',
  8: 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4',
};

function NextChainItem({ nextChainItem }) {
  if (nextChainItem.length === 0) {
    return null;
  }

  return (
    <div className={`${gridColumn[nextChainItem.length]} gap-y-4`}>
      {nextChainItem.map(({
        name, to, detail, id,
      }) => (
        <ChainItem
          key={id}
          name={name}
          to={to}
          detail={detail}
          id={id}
        />
      ))}
    </div>
  );
}

function Detail({ detail }) {
  if (detail.length === 0) {
    return null;
  }

  return (
    <div className="min-h-24 md:min-h-28 flex items-center justify-center md:w-44 lg:w-60 px-1.5">
      <TriggierV2 detail={detail} />
    </div>
  );
}

function ChainItem({
  to, detail, name, id,
}) {
  const { language } = useLanguage();
  const nameLan = language === 'ko' ? name.ko : name.en;
  const src = getSprityUrl(id);

  const containerClass = to.length === 8 ? '' : 'md:flex';

  return (
    <div className={containerClass}>
      <div className="flex justify-center">
        <div className="flex justify-center items-center flex-col md:flex-row">
          <Detail detail={detail} />
          <div className="w-24 md:w-24 flex flex-col items-center justify-center">
            <div className="w-16 h-16 md:w-20 relative md:h-20">
              <Image
                src={src}
                alt={nameLan}
                fill
                size="70px"
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="text-sm text-balance text-center">{nameLan}</div>
          </div>
        </div>
      </div>
      <NextChainItem nextChainItem={to} />
    </div>
  );
}

export default function Chain({ chainData }) {
  if (!chainData) {
    return null;
  }

  const { chain, index: chainIndex } = chainData;

  return (
    <div>
      <h3 className="text-2xl">진화</h3>
      <div>{chainIndex}</div>
      <div className="flex justify-center">
        <div className={gridColumn[chain.length]}>
          {chain.map(({
            name, to, detail, id,
          }) => (
            <ChainItem
              key={`${id}-${name.en}`}
              to={to}
              detail={detail}
              name={name}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
