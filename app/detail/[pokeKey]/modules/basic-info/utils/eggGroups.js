export function checkNoEggs(eggGroups) {
  console.log(eggGroups);

  if (!eggGroups || eggGroups[0] === 'no-eggs') {
    return true;
  }

  return eggGroups.length === 0;
}
