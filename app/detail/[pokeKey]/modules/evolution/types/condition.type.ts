interface ConditionType {
  key: string,
  value: number,
}

type OtherCaseType =
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

interface AffixType {
  prefix?: string,
  suffix?: string,
}

export type {
  ConditionType,
  OtherCaseType,
  AffixType,
}
