import React from 'react';
import { useLanguage } from '@/app/language-provider';
import { MoveLink } from '@/app/components/link-containers';
import type { MoveKey } from '@/app/data/move';
import {
  typesKo,
  type Type,
} from '@/app/data/pokeType';

function KnownMove({ value }: { value: MoveKey }) {
  const { language } = useLanguage();

  const localizedAffix = {
    ko: {
      prefix: '',
      suffix: '배운 상태에서',
    },
    en: {
      suffix: '',
      prefix: 'knowing',
    },
  };

  const { prefix, suffix } = localizedAffix[language];

  return (
    <span>
      {prefix && <span className="mr-1">{prefix}</span>}
      <MoveLink move={value} />
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  );
}

function AgileStyle({ value }: { value: MoveKey }) {
  const { language } = useLanguage();

  const localizedAffix = {
    ko: {
      prefix: '',
      suffix: '속공으로 20번 사용',
    },
    en: {
      prefix: 'Use',
      suffix: 'in the agile style 20 times in Hisui',
    },
  };

  const { prefix, suffix } = localizedAffix[language];

  return (
    <span>
      {prefix && <span className="mr-1">{prefix}</span>}
      <MoveLink move={value} />
      <span className="ml-1">{suffix}</span>
    </span>
  );
}

function StrongStyle({ value }: { value: MoveKey }) {
  const { language } = useLanguage();

  const localizedAffix = {
    ko: {
      prefix: '',
      suffix: '강공으로 20번 사용',
    },
    en: {
      prefix: 'Use',
      suffix: 'in the strong style 20 times in LA only',
    },
  };

  const { prefix, suffix } = localizedAffix[language];

  return (
    <span>
      {prefix && <span className="mr-1">{prefix}</span>}
      <MoveLink move={value} />
      <span className="ml-1">{suffix}</span>
    </span>
  );
}

function UsedMove({ value }: { value: MoveKey }) {
  const { language } = useLanguage();

  const localizedAffix = {
    ko: {
      prefix: '',
      suffix: '20번 사용 후',
    },
    en: {
      prefix: 'after using',
      suffix: '20 times',
    },
  };

  const { prefix, suffix } = localizedAffix[language];

  return (
    <span>
      {prefix && <span className="mr-1">{prefix}</span>}
      <MoveLink move={value} />
      <span className="ml-1">{suffix}</span>
    </span>
  );
}

function KnownMoveType({ value }: { value: Type }) {
  const { language } = useLanguage();

  const content = language === 'en'
    ? `after ${value}-type move learned`
    : `${typesKo[value]}타입 기술을 배우고`;

  return <span>{content}</span>;
}

const ConditionMove = {
  knownMove: KnownMove,
  agileStyle: AgileStyle,
  strongStyle: StrongStyle,
  usedMove: UsedMove,
  knownMoveType: KnownMoveType,
};

export default ConditionMove;
