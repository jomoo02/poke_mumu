'use client';

import React, { Fragment } from 'react';
import { useLanguage } from '@/app/language-provider';
import EvolutionArrowIcon from '@/app/ui/icons/evolution-arrow';
import {
  getChainNodeDetailWidthAndHeight,
  creteTriggerText,
} from '../../utils/chain';

export default function ChainNodeDetail({ detail, maxWidth, maxDepth }) {
  const { width, height } = getChainNodeDetailWidthAndHeight(maxWidth, maxDepth);

  const { language } = useLanguage();

  const createKey = (trigger, condition) => `${trigger}-${condition.map(({ key }) => key).join('/')}`;

  return (
    <div className={`flex items-center justify-center px-3.5 ${width} ${height}`}>
      <div className="text-xs md:text-sm text-center text-balance">
        {detail.map(({ trigger, condition }, index) => {
          const triggerText = creteTriggerText(trigger, condition);

          return (
            <Fragment key={createKey(trigger, condition)}>
              {index > 0 && <div>or</div>}
              <p>
                {(triggerText && language === 'en') && <span className="mr-1">{triggerText}</span>}
                <Condition condition={condition} language={language} />
                {(triggerText && language === 'ko') && <span className="ml-1">{triggerText}</span>}
              </p>
            </Fragment>
          );
        })}
        <div className="flex justify-center mt-2.5 md:mt-0.5">
          <EvolutionArrowIcon maxWidth={maxWidth} />
        </div>
      </div>
    </div>
  );
}
