interface ConditionItem {
  key: string,
  value: number | string,
}

type ConditionOtherCase =
  'sirfetchD'
  | 'shedinja'
  | 'runerigus'
  | 'kingambit'
  | 'urshifu_single'
  | 'urshifu_rapid'
  | 'lets_go'
  | 'maushold'
  | 'palafin'
  | 'gholdengo';

interface Affix {
  prefix?: string,
  suffix?: string,
}

export type {
  ConditionItem,
  ConditionOtherCase,
  Affix,
};
