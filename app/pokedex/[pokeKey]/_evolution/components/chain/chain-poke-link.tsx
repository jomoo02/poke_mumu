import React from 'react';
import Link from 'next/link';
import type { LanguageContent } from '@/app/types/languageContent.type';
import useChainPokeLink from '../../hooks/useChainPokeLink';

interface ChainPokeLinkProps {
  pokeKey: string;
  name: LanguageContent;
}

export default function ChainPokeLink({
  pokeKey,
  name,
}: ChainPokeLinkProps) {
  const {
    mainName,
    subName,
  } = useChainPokeLink(name);

  return (
    <Link
      href={`/pokedex/${pokeKey}`}
      className="text-center min-h-10 max-h-20 flex flex-col underline underline-offset-2 hover:text-blue-400"
      prefetch
    >
      <span className="text-sm md:text-[15px]">
        {mainName}
      </span>
      {subName && (
        <span className="text-xs">
          {subName}
        </span>
      )}
    </Link>
  );
}
