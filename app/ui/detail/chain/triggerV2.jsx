import React from 'react';
import { useLanguage } from '@/app/language-provider';
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

export default function TriggerV2({ detail }) {
  const { language } = useLanguage();

  const flexDirection = language === 'ko' ? 'flex-row flex-wrap' : 'flex-row-reverse flex-wrap-reverse';

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
    <div className="text-sm text-balance">
      {detail.map(({ trigger, condition }, index) => (
        <div key={createKey(trigger, condition)}>
          {index > 0 && <div className="text-center">or</div>}
          <div className={`flex gap-x-1 justify-center ${flexDirection}`}>
            <Condition condition={condition} language={language} />
            <span className="text-center">
              {creteTriggerText(trigger, condition)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
