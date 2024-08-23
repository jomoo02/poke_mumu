import React from 'react';
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
    <div className={`flex items-center justify-center px-3.5 ${width} ${height}`}>
      <div className="text-xs md:text-sm text-center text-balance">
        {detail.map(({ trigger, condition }, index) => (
          <div key={createDetailKey(trigger, condition)}>
            {index > 0 && <span>or</span>}
            <p className="text-center space-x-1">
              {language === 'en' && <Trigger trigger={trigger} condition={condition} />}
              <Condition condition={condition} />
              {language === 'ko' && <Trigger trigger={trigger} condition={condition} />}
            </p>
          </div>
        ))}
        <div className="flex justify-center mt-2.5 md:mt-0.5 ">
          <EvolutionArrowIcon maxWidth={maxWidth} />
        </div>
      </div>
    </div>
  );
}
