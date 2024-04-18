export default function filterStats(stats) {
  let effortStats = [];

  const baseStats = stats.map(({ stat, base_stat: baseStat, effort }) => {
    if (effort !== 0) {
      effortStats = [...effortStats, { stat: stat.name, value: effort }];
    }

    return {
      stat: stat.name,
      value: baseStat,
    };
  });

  return { baseStats, effortStats };
}
