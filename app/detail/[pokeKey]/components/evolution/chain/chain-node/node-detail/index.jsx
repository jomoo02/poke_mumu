import React, { Fragment } from 'react';
import { useLanguage } from '@/app/language-provider';
import EvolutionArrowIcon from '@/app/components/icons/evolution-arrow';
import Trigger from './trigger';
import Condition from './condition';
import {
  useChainMaxWidth,
  useChainMaxDepth,
} from '../../chain.context';
import {
  createDetailKey,
  getDetailWidthAndHeigt,
} from './detail.util';

export default function ChainNodeDetail({ detail = [] }) {
  const { language } = useLanguage();

  const maxWidth = useChainMaxWidth();

  const maxDepth = useChainMaxDepth();

  if (detail.length === 0) {
    return null;
  }

  const { width, height } = getDetailWidthAndHeigt(maxWidth, maxDepth);

  return (
    <div className={`flex flex-col items-center justify-center px-5 sm:px-1.5 lg:px-4 ${width} ${height}`}>
      <div className="text-xs md:text-sm text-center break-words space-x-1 w-full xl:px-4">
        {detail.map(({ trigger, condition }, index) => (
          <Fragment key={createDetailKey(trigger, condition)}>
            {index > 0 && <div>or</div>}
            {language === 'en' && <Trigger trigger={trigger} condition={condition} />}
            <Condition condition={condition} />
            {language === 'ko' && <Trigger trigger={trigger} condition={condition} />}
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-2.5 md:mt-0.5 ">
        <EvolutionArrowIcon maxWidth={maxWidth} />
      </div>
    </div>
  );
}
