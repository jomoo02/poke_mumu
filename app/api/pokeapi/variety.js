const exclusionNames = [
  'zygarde-50-power-construct',
  'zygarde-10',
  'morpeko-hangry',
];

const exclusionSpecies = [
  'castform',
  'greninja',
  'pikachu',
  'rockruff',
  'zarude',
  'dudunsparce',
  'koraidon',
  'miraidon',
  'floette',
  'cramorant',
  'eternatus',
  'maushold',
  'magearna',
];

const exclusionVarieties = [
  'gmax',
  'totem',
  'starter',
];

export default function filterVarieties(varieties) {
  if (varieties.length === 1) {
    return varieties;
  }

  return varieties.filter(({ pokemon }) => {
    const { name } = pokemon;

    if (!name.includes('-')) {
      return true;
    }

    if (exclusionNames.find((target) => target === name)) {
      return false;
    }

    const [species, variety, ...rest] = name.split('-');

    if (exclusionSpecies.find((target) => target === species)) {
      return false;
    }

    if (species === 'mimikyu') {
      return variety === 'disguised';
    }

    if (species === 'pumpkaboo' || species === 'gourgeist') {
      return variety === 'average';
    }

    if (species === 'minior') {
      return variety === 'red';
    }

    const checkVariety = ![variety, ...rest].some((namePiece) => {
      const isExclusionVariety = exclusionVarieties.find((exclusionVariety) => (
        exclusionVariety === namePiece
      ));

      return isExclusionVariety;
    });

    return checkVariety;
  });
}
