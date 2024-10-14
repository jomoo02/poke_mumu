export function formatMeasurement(value: number, unit: string) {
  const meters = value / 10;

  const formattedMeters = meters.toFixed(1);

  return `${formattedMeters} ${unit}`;
}

export function formatPokedexNumber(pokedexNumber: number) {
  return pokedexNumber.toString().padStart(4, '0');
}
