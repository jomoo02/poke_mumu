import React, { Fragment } from 'react';
import EvolutionArrowIcon from '@/app/components/icons/evolution-arrow';
import {
  useChainMaxWidth,
  useChainMaxDepth,
} from './chain.context';
import { useChainPokeDetail } from '../../hooks/useChainPoke';
import { renderChainPokeDetail } from './chain-poke-detail.utils';
import type { Detail } from '../../types/chain';

interface ChainPokeDetailProps {
  detail: Detail[];
}

export default function ChainPokeDetail({ detail }: ChainPokeDetailProps) {
  const maxWidth = useChainMaxWidth();
  const maxDepth = useChainMaxDepth();

  const {
    width,
    height,
    isInfoRenderReverse,
    setDetailKey,
  } = useChainPokeDetail(maxWidth, maxDepth);

  if (detail.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center justify-center px-5 sm:px-1.5 lg:px-4 ${width} ${height}`}>
      <div className="text-xs md:text-sm text-center break-words space-x-1 w-full xl:px-4">
        {detail.map(({ trigger, condition }, index) => (
          <Fragment key={setDetailKey(trigger, condition)}>
            {index > 0 && <div>or</div>}
            {renderChainPokeDetail(trigger, condition, isInfoRenderReverse)}
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-2.5 md:mt-0.5 ">
        <EvolutionArrowIcon maxWidth={maxWidth} />
      </div>
    </div>
  );
}
