export type Trigger =
  'level-up'
  | 'use-item'
  | 'trade'
  | 'other';

type TriggerContent = Record<Trigger, string>;

const triggerContentsKo: TriggerContent = {
  'level-up': '레벨 업',
  'use-item': '사용',
  trade: '통신교환',
  other: '',
};

const triggerContentsEn: TriggerContent = {
  'level-up': 'Level up',
  'use-item': 'use',
  trade: 'trade',
  other: '',
};

const localizedTriggerContents: Record<'en' | 'ko', TriggerContent> = {
  en: triggerContentsEn,
  ko: triggerContentsKo,
};

export {
  localizedTriggerContents,
};
