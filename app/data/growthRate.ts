const mediumSlow = 'medium-slow';
const medium = 'medium';
const fast = 'fast';
const slow = 'slow';
const slowThenVeryFast = 'slow-then-very-fast';
const fastThenVerySlow = 'fast-then-very-slow';

export type GrowthRate =
  'medium-slow'
  | 'medium'
  | 'fast'
  | 'slow'
  | 'slow-then-very-fast'
  | 'fast-then-very-slow';

const defaultGrowthRate = medium;

export type GrowthRates = Record<GrowthRate, string>;

const growthRatesEn: GrowthRates = {
  [slow]: 'Slow',
  [mediumSlow]: 'Medium Slow',
  [medium]: 'Medium Fast',
  [fast]: 'Fast',
  [slowThenVeryFast]: 'Erratic',
  [fastThenVerySlow]: 'fluctuating',
};

const growthRatesKo: GrowthRates = {
  [slow]: '항상 많음',
  [mediumSlow]: '초반 매우 적음, 후반 보통',
  [medium]: '항상 보통',
  [fast]: '항상 적음',
  [slowThenVeryFast]: '초반 매우 많음, 후반 매우 적음',
  [fastThenVerySlow]: '초반 매우 적음, 후반 매우 많음',
};

const localizedGrowthRates: Record<'en' | 'ko', GrowthRates> = {
  en: growthRatesEn,
  ko: growthRatesKo,
};

const expPointsAtLevel50: Record<GrowthRate, number> = {
  [slow]: 156250,
  [mediumSlow]: 117360,
  [medium]: 125000,
  [fast]: 100000,
  [slowThenVeryFast]: 125000,
  [fastThenVerySlow]: 142500,
};

const expPointsAtLevel100: Record<GrowthRate, number> = {
  [slow]: 1250000,
  [mediumSlow]: 1059860,
  [medium]: 1000000,
  [fast]: 800000,
  [slowThenVeryFast]: 600000,
  [fastThenVerySlow]: 1640000,
};

export {
  localizedGrowthRates,
  expPointsAtLevel50,
  expPointsAtLevel100,
  defaultGrowthRate,
};
