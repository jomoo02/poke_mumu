export default function useGenderRate(genderRate) {
  const genderInfo = {
    isGenderless: false,
    male: 0,
    female: 0,
  };

  if (genderRate === -1) {
    return {
      ...genderInfo,
      isGenderless: true,
    };
  }

  const femaleRate = 12.5;

  const female = genderRate * femaleRate;

  const male = 100 - female;

  return {
    ...genderInfo,
    male,
    female,
  };
}
