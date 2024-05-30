import React, { Fragment } from 'react';
import { useLanguage } from '@/app/language-provider';
import EvolutionArrowIcon from '@/app/ui/icons/evolution-arrow';
import Condition from './condition/condition';

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

export default function TriggerV2({ detail, maxWidth }) {
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

  return (
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
  );
}
