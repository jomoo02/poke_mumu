export default function useEggGroups(eggGroups) {
  console.log(eggGroups);

  if (eggGroups[0] === 'no-eggs') {
    return '미발견';
  }

  return eggGroups;
}
