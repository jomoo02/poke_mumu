'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import Link from 'next/link';
import Triggier from './trigger';
import TitleHeader from '../title-header';

const getSprityUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const gridColumn = {
  1: 'grid grid-cols-1',
  2: 'grid grid-cols-2 md:grid-cols-1',
  3: 'grid grid-cols-3 md:grid-cols-1',
  4: 'grid-grid-cols-4 md:grid-cols-1',
  7: 'grid grid-cols-7 md:grid-cols-1',
  8: 'grid grid-cols-2 lg:grid-cols-4',
};

function Detail({ detail, maxDepth, maxWidth }) {
  const width = (() => {
    if (maxWidth === 8) {
      return 'w-full';
    } if (maxWidth === 4) {
      return 'w-full md:w-80';
    } if (maxDepth === 2) {
      return 'w-full max-w-52 md:w-80 md:max-w-80 lg:w-96 lg:max-w-96';
    }
    return 'w-full max-w-52 md:w-40 lg:w-52 xl:max-w-72 xl:w-72';
  })();

  const height = (() => {
    if (maxWidth === 8) {
      return 'min-h-40 md:min-h-36';
    }
    return 'min-h-32 md:min-h-28';
  })();

  return (
    <div className={`flex items-center justify-center px-3.5 ${width} ${height}`}>
      <Triggier detail={detail} maxWidth={maxWidth} />
    </div>
  );
}

function ChainItemLink({ pokeKey, name }) {
  const [nameText, subNameText] = (() => {
    if (name.includes('(')) {
      const targetIndex = name.indexOf('(');
      const firstName = name.slice(0, targetIndex);
      const lastName = name.slice(targetIndex);
      return [firstName, lastName];
    }

    return [name];
  })();

  return (
    <Link
      href={`/detail/${pokeKey}`}
      className="text-center h-10 flex flex-col underline underline-offset-2 hover:text-blue-400"
    >
      <span className="text-sm md:text-[15px]">{nameText}</span>
      {subNameText && <span className="text-xs">{subNameText}</span>}
    </Link>
  );
}

function ChainItem({
  detail, name, id, maxDepth, maxWidth, pokeKey, to = [],
}) {
  const { language } = useLanguage();
  const nameLan = language === 'ko' ? name.ko : name.en;
  const src = getSprityUrl(id);

  return (
    <div className={maxWidth === 8 ? '' : 'md:flex'}>
      <div className="flex justify-center">
        <div className={`flex flex-col justify-center items-center ${maxWidth === 8 ? '' : 'md:flex-row'}`}>
          {detail.length > 0 && <Detail detail={detail} maxDepth={maxDepth} maxWidth={maxWidth} />}
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
            <ChainItemLink pokeKey={pokeKey} name={nameLan} />
          </div>
        </div>
      </div>
      {to.length > 0 && (
        <div className={`${gridColumn[to.length]} gap-y-4`}>
          {to.map((item) => (
            <ChainItem
              key={item.id}
              {...item}
              maxDepth={maxDepth}
              maxWidth={maxWidth}
            />
          ))}
        </div>
      )}
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
    <>
      <TitleHeader type={type} title={title} />
      <div className={`md:flex justify-center pt-2 pb-1 border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <div className={`${gridColumn[chain.length]} md:gap-y-4`}>
          {chain.map((item) => (
            <ChainItem
              key={`${item.pokeKey}-${item.id}-${item.name.en}`}
              {...item}
              maxDepth={maxDepth}
              maxWidth={maxWidth}
            />
          ))}
        </div>
      </div>
    </>
  );
}
