import React from 'react';
import { useLanguage } from '@/app/language-provider';
import Condition from './condition/condition';

export default function TriggerV2({ detail }) {
  const { language } = useLanguage();

  const flexDirection = language === 'ko' ? 'flex-row' : 'flex-row-reverse';

  const createKey = (trigger, condition) => `${trigger}-${condition.map(({ key }) => key).join('/')}`;

  const creteTriggerText = (trigger, condition) => {
    if (trigger === 'level-up' && !condition.find(({ key }) => key === 'min_level')) {
      return language === 'ko' ? '레벨 업' : 'Level up';
    } if (trigger === 'use-item') {
      return language === 'ko' ? '사용' : 'use';
    } if (trigger === 'trade') {
      return language === 'ko' ? '통신교환' : 'trade';
    }
    return null;
  };

  return (
    <div className="text-sm">
      {detail.map(({ trigger, condition }, index) => (
        <div key={createKey(trigger, condition)} className={`flex ${flexDirection} gap-1`}>
          {index > 0 && <div>or</div>}
          <div className={`flex ${flexDirection}`}>
            <div className="flex">
              <Condition condition={condition} language={language} />
            </div>
            <span className="flex justify-center mx-1">
              {creteTriggerText(trigger, condition)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
