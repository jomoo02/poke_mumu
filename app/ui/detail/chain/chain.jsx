'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import TriggierV2 from './trigger';

const getSprityUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const gridColumn = {
  1: 'grid grid-cols-1',
  2: 'grid grid-cols-2 md:grid-cols-1',
  3: 'grid grid-cols-3 md:grid-cols-1',
  4: 'grid-grid-cols-4 md:grid-cols-1',
  7: 'grid grid-cols-7 md:grid-cols-1',
  8: 'grid grid-cols-2 lg:grid-cols-4',
};

function NextChainItem({ nextChainItem, maxDepth, maxWidth }) {
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
          maxDepth={maxDepth}
          maxWidth={maxWidth}
        />
      ))}
    </div>
  );
}

function Detail({ detail, maxDepth, maxWidth }) {
  if (detail.length === 0) {
    return null;
  }

  const getWidth = () => {
    if (maxWidth === 8) {
      return 'w-full';
    }
    if (maxWidth === 4) {
      return 'w-full md:w-80';
    }
    if (maxDepth === 2) {
      return 'w-full max-w-52 md:w-80 md:max-w-80 lg:w-96 lg:max-w-96';
    }
    return 'w-full max-w-52 md:w-52 xl:max-w-72 xl:w-72';
  };

  const getHeight = () => {
    if (maxWidth === 8) {
      return 'min-h-40 md:min-h-36';
    }
    return 'min-h-32 md:min-h-28';
  };

  const width = getWidth();
  const height = getHeight();

  return (
    <div className={`flex items-center justify-center px-3.5 ${width} ${height}`}>
      <TriggierV2 detail={detail} maxWidth={maxWidth} />
    </div>
  );
}

function ChainItem({
  to, detail, name, id, maxDepth, maxWidth,
}) {
  const { language } = useLanguage();
  const nameLan = language === 'ko' ? name.ko : name.en;
  const src = getSprityUrl(id);

  const containerClass = maxWidth === 8 ? '' : 'md:flex';
  const flexRowClass = maxWidth === 8 ? 'flex-col' : 'flex-col md:flex-row';

  return (
    <div className={containerClass}>
      <div className="flex justify-center">
        <div className={`flex justify-center items-center ${flexRowClass}`}>
          <Detail detail={detail} maxDepth={maxDepth} maxWidth={maxWidth} />
          <div className="min-w-20 max-w-24 xs:w-24 md:w-24 flex flex-col items-center justify-center">
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
            <div className="text-center h-10 flex flex-col">
              {nameLan.split('(').map((part, index) => (
                <span key={part} className={`${index > 0 ? 'text-xs' : 'text-sm md:text-[15px]'}`}>
                  {index > 0 && '('}
                  {part}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <NextChainItem nextChainItem={to} maxDepth={maxDepth} maxWidth={maxWidth} />
    </div>
  );
}

export default function Chain({ chainData, type }) {
  const { language } = useLanguage();

  if (!chainData) {
    return null;
  }

  const {
    chain,
    maxWidth,
    maxDepth,
  } = chainData;

  const title = language === 'ko' ? '진화' : 'Evolution Tree';

  return (
    <div>
      <div className={`w-full ${type} text-center py-[3px] sm:py-1.5 rounded-t-md`}>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
      </div>
      <div className={`md:flex justify-center pt-2 pb-1 border-2 border-t-0 ${type}-border rounded-b-sm`}>
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
              maxDepth={maxDepth}
              maxWidth={maxWidth}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
