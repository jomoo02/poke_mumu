import React from 'react';
import Link from 'next/link';
import { splitPokeLinkName } from './utils';

export default function PokeLink({ pokeKey, name }) {
  const [mainName, subName] = splitPokeLinkName(name);

  return (
    <Link
      href={`/detail/${pokeKey}`}
      className="text-center min-h-10 max-h-20 flex flex-col underline underline-offset-2 hover:text-blue-400"
    >
      <span className="text-sm md:text-[15px]">{mainName}</span>
      {subName && <span className="text-xs">{subName}</span>}
    </Link>
  );
}
