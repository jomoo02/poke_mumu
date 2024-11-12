import {
  pokeTypesObj,
  type PokeTypeKey,
} from '@/app/data/pokeType';
import {
  typeDefenseCompatibility,
} from '@/app/data/defenseCompatibility';

// 초기 방어 상성 값을 생성
function getInitialDfCompatibility() {
  const allPokeType = Object.keys(pokeTypesObj) as (keyof typeof pokeTypesObj)[];

  return allPokeType.reduce((acc, type) => {
    acc[type] = 1;
    return acc;
  }, {} as Record<PokeTypeKey, number>);
}

// 주어진 types에 따른 방어 상성을 적용
function applyTypeEffectiveness(types: PokeTypeKey[]) {
  const typeEffectiveness = getInitialDfCompatibility();

  const calculateEffectiveness = (
    effectivenessType: PokeTypeKey[] | undefined,
    modifier: number,
  ) => {
    effectivenessType?.forEach((type) => {
      typeEffectiveness[type] *= modifier;
    });
  };

  types.forEach((type) => {
    const { superEffective, notVeryEffective, noEffect } = typeDefenseCompatibility[type];

    calculateEffectiveness(superEffective, 2);
    calculateEffectiveness(notVeryEffective, 0.5);
    calculateEffectiveness(noEffect, 0);
  });

  return typeEffectiveness;
}

// 방어 상성을 { 배율, [타입] }[] 형식으로 포맷
function formatDefenseCompatibility(types: PokeTypeKey[]) {
  const typeEffectiveness = applyTypeEffectiveness(types);

  const defenseCompatibility = Object.entries(typeEffectiveness)
    .reduce((acc, [type, effectiveness]) => {
      acc[effectiveness] ??= [];
      acc[effectiveness].push(type as PokeTypeKey);
      return acc;
    }, {} as Record<number, PokeTypeKey[]>);

  return Object.keys(defenseCompatibility)
    .map(Number)
    .sort((a, b) => b - a)
    .map((damageRate) => ({
      damageRate,
      types: defenseCompatibility[damageRate],
    }));
}

export { formatDefenseCompatibility };
