import React from 'react';
import { useLanguage } from '@/app/language-provider';
import {
  localizedOtherPokeContents,
  type OtherPoke,
} from '../../data/conditionOther';

function Other({ value }: { value: OtherPoke }) {
  const { language } = useLanguage();

  const localeOtherPokeContents = localizedOtherPokeContents[language];

  const content = localeOtherPokeContents[value];

  return <span>{content}</span>;
}

function Spin() {
  const { language } = useLanguage();

  const localizedAffix = {
    en: {
      suffix: '',
      prefix: 'Spin holding a',
    },
    ko: {
      prefix: '',
      suffix: '지니게하고 L스틱으로 캐릭터를 계속 회전',
    },
  };

  const { suffix, prefix } = localizedAffix[language];

  const localeContent = language === 'en' ? 'Sweet' : '사탕공예를';

  return (
    <span>
      {prefix && <span className="mr-1">{prefix}</span>}
      {localeContent}
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  );
}

function TurnUpsideDown() {
  const { language } = useLanguage();

  const localizedContent = {
    ko: '기기를 위아래 거꾸로 잡은 상태',
    en: 'holding console upside down',
  };

  const content = localizedContent[language];

  return <span>{content}</span>;
}

function RecoilDamage({ value }: { value: number }) {
  const { language } = useLanguage();

  const content = language === 'ko'
    ? `누적 반동 데미지 ${value} 이상 입은 상태에서`
    : `after losing at least ${value} HP from recoil damage`;
  return <span>{content}</span>;
}

const ConditionOther = {
  other: Other,
  spin: Spin,
  turn: TurnUpsideDown,
  recoilDamage: RecoilDamage,
};

export default ConditionOther;
