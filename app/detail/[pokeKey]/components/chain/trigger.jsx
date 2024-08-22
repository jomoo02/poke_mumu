import React, { Fragment } from 'react';
import { useLanguage } from '@/app/language-provider';
import EvolutionArrowIcon from '@/app/ui/icons/evolution-arrow';
import Condition from './condition';

const LANGUAGE_TRIGGER_CONTENT = {
  ko: {
    levelUp: '레벨 업',
    item: '사용',
    trade: '통신교환',
  },
  en: {
    levelUp: 'Level up',
    item: 'use',
    trade: 'trade',
  },
};

const getWidthAndHeight = (maxDepth, maxWidth) => {
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

  return { width, height };
};

export default function Trigger({
  detail,
  maxWidth,
  maxDepth,
}) {
  const { language } = useLanguage();

  const createKey = (trigger, condition) => `${trigger}-${condition.map(({ key }) => key).join('/')}`;

  const creteTriggerText = (trigger, condition) => {
    const content = LANGUAGE_TRIGGER_CONTENT[language];

    if (trigger === 'level-up' && !condition.find(({ key }) => key === 'min_level')) {
      return content.levelUp;
    } if (trigger === 'use-item') {
      return content.item;
    } if (trigger === 'trade') {
      return content.trade;
    }
    return null;
  };

  const { width, height } = getWidthAndHeight(maxDepth, maxWidth);

  return (
    <div className={`${width} ${height} flex justify-center items-center px-3.5`}>
      <div className="text-xs md:text-sm text-center text-balance">
        {detail.map(({ trigger, condition }, index) => {
          const triggerText = creteTriggerText(trigger, condition);

          return (
            <Fragment key={createKey(trigger, condition)}>
              {index > 0 && <div>or</div>}
              <p>
                {(triggerText && language === 'en') && <span className="mr-1">{triggerText}</span>}
                <Condition condition={condition} />
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
