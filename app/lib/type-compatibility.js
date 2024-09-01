const NORMAL = 'normal';
const FIRE = 'fire';
const ROCK = 'rock';
const GHOST = 'ghost';
const POISON = 'poison';
const GRASS = 'grass';
const DRAGON = 'dragon';
const WATER = 'water';
const FLYING = 'flying';
const BUG = 'bug';
const DARK = 'dark';
const ELECTRIC = 'electric';
const GROUND = 'ground';
const ICE = 'ice';
const STEEL = 'steel';
const FAIRY = 'fairy';
const FIGHTING = 'fighting';
const PSYCHIC = 'psychic';

const SUPER_EFFECTIVE = 'superEffective';
const NOT_VERY_EFFECTIVE = 'notVeryEffective';
const NO_EFFECT = 'noEffect';

const defenseCompatibilities = {
  [NORMAL]: {
    [SUPER_EFFECTIVE]: [FIGHTING],
    [NO_EFFECT]: [GHOST],
  },
  [FIRE]: {
    [SUPER_EFFECTIVE]: [WATER, GROUND, ROCK],
    [NOT_VERY_EFFECTIVE]: [FIRE, GRASS, ICE, BUG, STEEL, FAIRY],
  },
  [WATER]: {
    [SUPER_EFFECTIVE]: [GRASS, ELECTRIC],
    [NOT_VERY_EFFECTIVE]: [FIRE, WATER, ICE, STEEL],
  },
  [GRASS]: {
    [SUPER_EFFECTIVE]: [FIRE, ICE, FLYING, BUG],
    [NOT_VERY_EFFECTIVE]: [WATER, GRASS, ELECTRIC, GROUND],
  },
  [ELECTRIC]: {
    [SUPER_EFFECTIVE]: [GROUND],
    [NOT_VERY_EFFECTIVE]: [ELECTRIC, FLYING, STEEL],
  },
  [ICE]: {
    [SUPER_EFFECTIVE]: [FIRE, FIGHTING, ROCK, STEEL],
    [NOT_VERY_EFFECTIVE]: [ICE],
  },
  [FIGHTING]: {
    [SUPER_EFFECTIVE]: [FLYING, PSYCHIC, FAIRY],
    [NOT_VERY_EFFECTIVE]: [BUG, ROCK, DARK],
  },
  [POISON]: {
    [SUPER_EFFECTIVE]: [GROUND, PSYCHIC],
    [NOT_VERY_EFFECTIVE]: [GRASS, FIGHTING, POISON, BUG, FAIRY],
  },
  [GROUND]: {
    [SUPER_EFFECTIVE]: [WATER, GRASS, ICE],
    [NOT_VERY_EFFECTIVE]: [POISON, ROCK],
    [NO_EFFECT]: [ELECTRIC],
  },
  [FLYING]: {
    [SUPER_EFFECTIVE]: [ELECTRIC, ICE, ROCK],
    [NOT_VERY_EFFECTIVE]: [GRASS, FIGHTING, BUG],
    [NO_EFFECT]: [GROUND],
  },
  [PSYCHIC]: {
    [SUPER_EFFECTIVE]: [BUG, GHOST, DARK],
    [NOT_VERY_EFFECTIVE]: [FIGHTING, PSYCHIC],
  },
  [BUG]: {
    [SUPER_EFFECTIVE]: [FIRE, FLYING, ROCK],
    [NOT_VERY_EFFECTIVE]: [GRASS, FIGHTING, GROUND],
  },
  [ROCK]: {
    [SUPER_EFFECTIVE]: [WATER, FIGHTING, GRASS, STEEL, GROUND],
    [NOT_VERY_EFFECTIVE]: [NORMAL, FIRE, POISON, FLYING],
  },
  [GHOST]: {
    [SUPER_EFFECTIVE]: [GHOST, DARK],
    [NOT_VERY_EFFECTIVE]: [POISON, BUG],
    [NO_EFFECT]: [NORMAL, FIGHTING],
  },
  [DRAGON]: {
    [SUPER_EFFECTIVE]: [ICE, DRAGON, FAIRY],
    [NOT_VERY_EFFECTIVE]: [FIRE, WATER, GRASS, ELECTRIC],
  },
  [DARK]: {
    [SUPER_EFFECTIVE]: [FIGHTING, BUG, FAIRY],
    [NOT_VERY_EFFECTIVE]: [GHOST, DARK],
    [NO_EFFECT]: [PSYCHIC],
  },
  [STEEL]: {
    [SUPER_EFFECTIVE]: [FIRE, FIGHTING, GROUND],
    [NOT_VERY_EFFECTIVE]: [NORMAL, GRASS, ICE, FLYING, PSYCHIC, BUG, ROCK, DRAGON, STEEL, FAIRY],
    [NO_EFFECT]: [POISON],
  },
  [FAIRY]: {
    [SUPER_EFFECTIVE]: [POISON, STEEL],
    [NOT_VERY_EFFECTIVE]: [FIGHTING, BUG, DARK],
    [NO_EFFECT]: [DRAGON],
  },
};

function setInitialCompatibility() {
  return [
    NORMAL, FIRE, ROCK, GHOST, POISON, GRASS, DRAGON, WATER, FLYING,
    BUG, DARK, ELECTRIC, GROUND, ICE, STEEL, FAIRY, FIGHTING, PSYCHIC,
  ].reduce((acc, type) => {
    acc[type] = 1;
    return acc;
  }, {});
}

function getDefenseCompatibility(types) {
  const dfCompatibility = setInitialCompatibility();

  types.forEach((type) => {
    const {
      superEffective,
      notVeryEffective,
      noEffect,
    } = defenseCompatibilities[type];

    if (superEffective) {
      superEffective.forEach((target) => {
        dfCompatibility[target] *= 2;
      });
    }

    if (notVeryEffective) {
      notVeryEffective.forEach((target) => {
        dfCompatibility[target] /= 2;
      });
    }

    if (noEffect) {
      noEffect.forEach((target) => {
        dfCompatibility[target] *= 0;
      });
    }
  });

  const defenseCompatibility = Object.keys(dfCompatibility).reduce((acc, type) => {
    const effectiveness = dfCompatibility[type];
    if (acc[effectiveness]) {
      acc[effectiveness].push(type);
    } else {
      acc[effectiveness] = [type];
    }
    return acc;
  }, {});

  return Object.keys(defenseCompatibility)
    .sort((a, b) => b - a)
    .map((key) => ({
      damageRate: key,
      types: defenseCompatibility[key],
    }));
}

export { getDefenseCompatibility };
