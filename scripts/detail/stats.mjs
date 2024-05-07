export default function extractStats(stats) {
  const baseStats = stats.map(({ stat, base_stat: baseStat }) => ({
    stat: stat.name,
    value: baseStat,
  }));

  const effortStats = stats
    .filter(({ effort }) => effort)
    .map(({ stat, effort }) => ({
      stat: stat.name,
      value: effort,
    }));

  return { baseStats, effortStats };
}
