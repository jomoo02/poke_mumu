import { StatType, StatObjType } from '../types/stat.type';

export function sumStats(stats: StatType[]) {
  return stats.reduce((acc, { value }) => acc + value, 0);
}

export function combineStatsWithEffort(stats: StatType[], efforts: StatType[]): StatObjType[] {
  return stats.map(({ stat, value }) => {
    const foundEffort = efforts.find((effortStat) => effortStat.stat === stat);
    const effortValue = foundEffort ? foundEffort.value : 0;

    return {
      stat,
      value,
      effortValue,
    };
  });
}

export function calculateMaxStat(stats: StatType[]) {
  return Math.max(...stats.map(({ value }) => value));
}

export function calculateBarWidth(currentStat: number, referenceStat: number) {
  const scaleFactor = referenceStat < 200 ? 255 : 300;

  const barWidth = `${(currentStat / scaleFactor) * 100}%`;

  return barWidth;
}
