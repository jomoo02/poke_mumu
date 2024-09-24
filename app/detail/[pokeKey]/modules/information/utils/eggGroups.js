export function checkNoEggs(eggGroups) {
  if (!eggGroups || eggGroups[0] === 'no-eggs') {
    return true;
  }

  return eggGroups.length === 0;
}
