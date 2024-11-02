import {
  pokeTypesObj,
  type Type,
} from '@/app/data/pokeType';

export type EffectiveItem =
  'superEffective'
  | 'notVeryEffective'
  | 'noEffect';

export type EffectiveItemList = Partial<Record<EffectiveItem, Type[]>>;

const {
  normal,
  fire,
  rock,
  ghost,
  poison,
  grass,
  dragon,
  water,
  flying,
  bug,
  dark,
  electric,
  ground,
  ice,
  steel,
  fairy,
  fighting,
  psychic,
} = pokeTypesObj;

const typeDefenseCompatibility: Record<Type, EffectiveItemList> = {
  normal: {
    superEffective: [fighting],
    noEffect: [ghost],
  },
  fire: {
    superEffective: [water, ground, rock],
    notVeryEffective: [fire, grass, ice, bug, steel, fairy],
  },
  water: {
    superEffective: [grass, electric],
    notVeryEffective: [fire, water, ice, steel],
  },
  grass: {
    superEffective: [fire, ice, flying, bug],
    notVeryEffective: [water, grass, electric, ground],
  },
  electric: {
    superEffective: [ground],
    notVeryEffective: [electric, flying, steel],
  },
  ice: {
    superEffective: [fire, fighting, rock, steel],
    notVeryEffective: [ice],
  },
  fighting: {
    superEffective: [flying, psychic, fairy],
    notVeryEffective: [bug, rock, dark],
  },
  poison: {
    superEffective: [ground, psychic],
    notVeryEffective: [grass, fighting, poison, bug, fairy],
  },
  ground: {
    superEffective: [water, grass, ice],
    notVeryEffective: [poison, rock],
    noEffect: [electric],
  },
  flying: {
    superEffective: [electric, ice, rock],
    notVeryEffective: [grass, fighting, bug],
    noEffect: [ground],
  },
  psychic: {
    superEffective: [bug, ghost, dark],
    notVeryEffective: [fighting, psychic],
  },
  bug: {
    superEffective: [fire, flying, rock],
    notVeryEffective: [grass, fighting, ground],
  },
  rock: {
    superEffective: [water, fighting, grass, steel, ground],
    notVeryEffective: [normal, fire, poison, flying],
  },
  ghost: {
    superEffective: [ghost, dark],
    notVeryEffective: [poison, bug],
    noEffect: [normal, fighting],
  },
  dragon: {
    superEffective: [ice, dragon, fairy],
    notVeryEffective: [fire, water, grass, electric],
  },
  dark: {
    superEffective: [fighting, bug, fairy],
    notVeryEffective: [ghost, dark],
    noEffect: [psychic],
  },
  steel: {
    superEffective: [fire, fighting, ground],
    notVeryEffective: [normal, grass, ice, flying, psychic, bug, rock, dragon, steel, fairy],
    noEffect: [poison],
  },
  fairy: {
    superEffective: [poison, steel],
    notVeryEffective: [fighting, bug, dark],
    noEffect: [dragon],
  },
};

export {
  typeDefenseCompatibility,
};
