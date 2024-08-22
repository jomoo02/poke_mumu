'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import Trigger from './trigger';

const gridColumn = {
  1: 'grid grid-cols-1',
  2: 'grid grid-cols-2 md:grid-cols-1',
  3: 'grid grid-cols-3 md:grid-cols-1',
  4: 'grid-grid-cols-4 md:grid-cols-1',
  7: 'grid grid-cols-7 md:grid-cols-1',
  8: 'grid grid-cols-2 lg:grid-cols-4',
};

function PokeImage({ id, alt }) {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="w-16 h-16 md:w-20 relative md:h-20">
      <Image
        src={src}
        alt={alt}
        fill
        size="70px"
        priority
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

function PokeLink({ pokeKey, name }) {
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

export default function ChainNode({
  detail,
  name,
  id,
  pokeKey,
  maxDepth,
  maxWidth,
  to,
}) {
  const { language } = useLanguage();
  const localeName = name[language] || name.ko;

  return (
    <div className={maxWidth === 8 ? '' : 'md:flex'}>
      <div className="flex justify-center">
        <div className={`flex flex-col justify-center items-center ${maxWidth === 8 ? '' : 'md:flex-row'}`}>
          {detail.length > 0 && (
            <Trigger maxDepth={maxDepth} maxWidth={maxWidth} detail={detail} />
          )}
          <div className="min-w-20 max-w-24 xs:w-24 md:w-24 flex flex-col items-center justify-center">
            <PokeImage id={id} alt={localeName} />
            <PokeLink pokeKey={pokeKey} name={localeName} />
          </div>
        </div>
      </div>
      {to.length > 0 && (
        <div className={`${gridColumn[to.length]} gap-y-4`}>
          {to.map((item) => (
            <ChainNode
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
