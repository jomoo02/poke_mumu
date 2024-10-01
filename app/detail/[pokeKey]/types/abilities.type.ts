interface AbilityType {
  name: {
    en: string,
    ko: string,
  },
  flavorText: {
    en: string,
    ko: string,
  },
  isHidden: boolean,
}

type AbilitiesType = AbilityType[];

export type {
  AbilityType,
  AbilitiesType,
};
