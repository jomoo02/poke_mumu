import React, { Fragment } from 'react';
import EvolutionArrowIcon from '@/app/components/icons/evolution-arrow';
import type { Detail } from '@/app/models/chain.type';
import {
  useChainMaxWidth,
  useChainMaxDepth,
} from './chain.context';
import useChainPokeDetail from '../../hooks/useChainPokeDetail';
import ConditionList from '../condition';
import EvolutionTrigger from '../evolution-trigger';

interface ChainPokeDetailProps {
  detail: Detail[];
}

export default function ChainPokeDetail({
  detail,
}: ChainPokeDetailProps) {
  const maxWidth = useChainMaxWidth();
  const maxDepth = useChainMaxDepth();

  const {
    width,
    height,
    isReverse,
    createPokeDetailKey,
  } = useChainPokeDetail(maxWidth, maxDepth);

  if (detail.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center justify-center px-5 sm:px-1.5 lg:px-4 ${width} ${height}`}>
      <div className="text-xs md:text-sm text-center break-words space-x-1 w-full xl:px-4">
        {detail.map(({ trigger, condition }, index) => (
          <Fragment key={createPokeDetailKey(trigger, condition.map(({ key }) => key))}>
            {index > 0 && <div>or</div>}
            {isReverse ? (
              <>
                <ConditionList condition={condition} />
                <EvolutionTrigger trigger={trigger} condition={condition} />
              </>

            ) : (
              <>
                <EvolutionTrigger trigger={trigger} condition={condition} />
                <ConditionList condition={condition} />
              </>
            )}
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-2.5 md:mt-0.5 ">
        <EvolutionArrowIcon maxWidth={maxWidth} />
      </div>
    </div>
  );
}
