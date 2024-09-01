function formatMeasurement(value, unit) {
  const meters = value / 10;

  const formattedMeters = meters.toFixed(1);

  return `${formattedMeters} ${unit}`;
}

export { formatMeasurement };
