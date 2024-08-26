import React from 'react';
import { useLanguage } from '@/app/language-provider';
import ChainNodeDetail from './node-detail';
import PokeImage from './node-image';
import PokeLink from './node-link';
import { useChainMaxWidth } from '../chain.context';

export default function ChainNode({ chainNodeData }) {
  const {
    pokeKey,
    id,
    detail,
    name,
  } = chainNodeData;

  const { language } = useLanguage();

  const { maxWidth } = useChainMaxWidth();

  const localeName = name[language] || name.en;

  return (
    <div className={`flex flex-col justify-center items-center ${maxWidth === 8 ? '' : 'md:flex-row'}`}>
      <ChainNodeDetail detail={detail} />
      <div className="min-w-20 max-w-24 xs:w-24 md:w-24 flex flex-col items-center justify-center py-4">
        <PokeImage id={id} alt={localeName} />
        <PokeLink pokeKey={pokeKey} name={localeName} />
      </div>
    </div>
  );
}
