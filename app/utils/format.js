export function formatMeasurement(value, unit) {
  const meters = value / 10;

  const formattedMeters = meters.toFixed(1);

  return `${formattedMeters} ${unit}`;
}

export function formatPokedexNumber(pokedexNumber) {
  return pokedexNumber.toString().padStart(4, '0');
}
