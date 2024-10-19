import type { ConditionItem } from '../types/condition';
import type { TriggerKey } from '../types/trigger';

export function createDetailKey(trigger: TriggerKey, condition: ConditionItem[]) {
  return `${trigger}-${condition.map(({ key }) => key).join('/')}`;
}

export function getDetailWidthAndHeigt(maxWidth: number, maxDepth: number) {
  const width = (() => {
    if (maxWidth === 8) {
      return 'w-full';
    } if (maxWidth === 4) {
      return 'w-full md:w-80';
    } if (maxDepth === 2) {
      return 'w-full md:max-w-52 md:w-80 md:max-w-80 lg:w-96 lg:max-w-96';
    }
    return 'w-full md:max-w-52 md:w-40 lg:w-52 xl:max-w-72 xl:w-72';
  })();

  const height = (() => {
    if (maxWidth === 8) {
      return 'min-h-40 md:min-h-36';
    }
    return 'min-h-32 md:min-h-28';
  })();

  return { width, height };
}
