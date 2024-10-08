export function sumStats(stats) {
  return stats.reduce((acc, { value }) => acc + value, 0);
}

export function combineStatsWithEffort(stats, efforts) {
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

export function calculateMaxStat(stats) {
  return Math.max(...stats.map(({ value }) => value));
}

export function calculateBarWidth(currentStat, referenceStat) {
  const scaleFactor = referenceStat < 200 ? 255 : 300;

  const barWidth = `${(currentStat / scaleFactor) * 100}%`;

  return barWidth;
}
